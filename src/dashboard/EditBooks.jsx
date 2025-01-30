import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const EditBooks = () => {
  const { id } = useParams();
  const book = useLoaderData();

  const bookCategories = [
    "Fiction", "Non-Fiction", "History", "Programming", "Science Fiction",
    "Fantasy", "Horror", "Bibliography", "Autobiography", "Self-help",
    "Memoir", "Business", "Children Books", "Travel", "Religion",
    "Art and Design", "Thriller", "Mystery", "Audiobook", "Suspense", "Adult", "Love Stories"
  ];

  const [bookTitle, setBookTitle] = useState(book.bookTitle || "");
  const [authorName, setAuthorName] = useState(book.authorName || "");
  const [imageURL, setImageURL] = useState(book.imageURL || "");
  const [category, setCategory] = useState(bookCategories.includes(book.category) ? book.category : bookCategories[0]);
  const [bookDescription, setBookDescription] = useState(book.bookDescription || "");
  const [bookPDFURL, setBookPDFURL] = useState(book.bookPDFURL || "");

  const handleUpdate = (event) => {
    event.preventDefault();

    const updatedBook = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };

    fetch(`https://book-store-backend-2-rlxg.onrender.com/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book updated successfully!");  // Alert should now work
      })
      .catch((error) => {
        console.error("Error updating book:", error);
        alert("Failed to update book. Please try again.");
      });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update Book Details</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col gap-4">
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <label htmlFor="bookTitle" className="block mb-2 text-gray-700">Book Title</label>
            <input 
              id="bookTitle"
              type="text" 
              placeholder="Book name"
              value={bookTitle}
              onChange={(e) => setBookTitle(e.target.value)}
              required 
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-700 border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div className='lg:w-1/2'>
            <label htmlFor="authorName" className="block mb-2 text-gray-700">Author Name</label>
            <input 
              id="authorName"
              type="text" 
              placeholder="Author name" 
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              required 
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-700 border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
        </div>

        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <label htmlFor="imageURL" className="block mb-2 text-gray-700">Book Image URL</label>
            <input 
              id="imageURL"
              type="text" 
              placeholder="Book Img URL"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
              required 
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-700 border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div className='lg:w-1/2'>
            <label htmlFor="category" className="block mb-2 text-gray-700">Book Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-700 border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              {bookCategories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="bookDescription" className="block mb-2 text-gray-700">Book Description</label>
          <textarea
            id="bookDescription"
            placeholder="Write your book description..."
            value={bookDescription}
            onChange={(e) => setBookDescription(e.target.value)}
            required
            className="w-full min-h-[100px] p-3 rounded-lg bg-gray-100 text-gray-700 border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 resize-y"
            rows="4"
          />
        </div>

        <div>
          <label htmlFor="bookPDFURL" className="block mb-2 text-gray-700">Book PDF URL</label>
          <input 
            id="bookPDFURL"
            type="text" 
            placeholder="Book PDF URL" 
            value={bookPDFURL}
            onChange={(e) => setBookPDFURL(e.target.value)}
            required 
            className="w-full p-3 rounded-lg bg-gray-100 text-gray-700 border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <button 
          type="submit" 
          className="mt-5 w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBooks;
