import React, { useEffect, useState } from 'react';

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>All Books are here!</h2>

      <div className='grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8 my-12'>
        {books.map((book, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg flex flex-col">
            <img src={book.imageURL} alt='' className='h-96 w-full object-cover rounded-t-lg'/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">
              {book.bookTitle}
            </h5>
            <p className="font-normal text-gray-700 flex-grow">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
