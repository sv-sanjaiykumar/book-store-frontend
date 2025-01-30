import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("https://book-store-backend-2-rlxg.onrender.com/all-books").then(res => res.json()).then(data => setAllBooks(data)).catch(err => console.error("Error fetching books:", err));
  }, []);

  //delete a book
  const handleDelete = (id) =>{
    console.log(id);
    fetch(`https://book-store-backend-2-rlxg.onrender.com/book/${id}`,{method:"DELETE"}).then(res => res.json()).then(data => {
      alert("Book is deleted successfully");
      // setAllBooks(data);
    })
  }

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>

      {/* Table for book data */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md lg:w-[1180px]">
          {/* Table Head */}
          <thead className="bg-gray-100 border-b">
            <tr className="text-left">
              <th className="p-3 text-gray-700 font-semibold">S.No</th>
              <th className="p-3 text-gray-700 font-semibold">Book Name</th>
              <th className="p-3 text-gray-700 font-semibold">Author Name</th>
              <th className="p-3 text-gray-700 font-semibold">Category</th>
              <th className="p-3 text-gray-700 font-semibold">Price</th>
              <th className="p-3 text-gray-700 font-semibold">Edit or Manage</th>
            </tr>
          </thead>
          <tbody>
            {allBooks.length > 0 ? (
              allBooks.map((book, index) => (
                <tr key={book._id} className="border-b">
                  <td className="p-3">{index + 1}</td> {/* Serial Number */}
                  <td className="p-3">{book.bookTitle}</td>
                  <td className="p-3">{book.authorName}</td>
                  <td className="p-3">{book.category}</td>
                  <td className="p-3">${book.price}</td>
                  <td className="p-3">
                    <Link
                      to={`/admin/dashboard/edit-book/${book._id}`}
                      className="font-medium text-cyan-600 hover:underline mr-7"
                    >
                      Edit
                    </Link>
                    <button onClick={() => handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-3 text-center text-gray-500">
                  No books found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBooks;
