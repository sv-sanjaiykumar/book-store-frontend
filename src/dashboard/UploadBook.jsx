import React, { useState } from 'react';

const Uploadbook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "History",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
    "Thriller",
    "Mystery",
    "Audiobook",
    "Suspense",
    "Adult",
    "Love Stories"
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  // Handle book submission
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.inputState.value; 
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category, 
      bookDescription,
      bookPDFURL
    };

    console.log(bookObj);

    //send data to database
    fetch("https://book-store-backend-2-rlxg.onrender.com/upload-book", {
      method: "POST",
      headers: {
        "Content-type" : "application/json",
      },
      body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(data => {
      //console.log(data);
        alert("Book uploaded successfully");
        form.reset();
    })

  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* First row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <label htmlFor="bookTitle" className="block mb-2 text-gray-700">Book Title</label>
            <input 
              id="bookTitle"
              name='bookTitle'
              type="text" 
              placeholder="Book name" 
              required 
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-700 border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          {/* Author name */}
          <div className='lg:w-1/2'>
            <label htmlFor="authorName" className="block mb-2 text-gray-700">Author Name</label>
            <input 
              id="authorName"
              name='authorName'
              type="text" 
              placeholder="Author name" 
              required 
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-700 border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
        </div>

        {/* Second row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <label htmlFor="imageURL" className="block mb-2 text-gray-700">Book Image URL</label>
            <input 
              id="imageURL"
              name='imageURL'
              type="text" 
              placeholder="Book Img URL" 
              required 
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-700 border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          {/* Category */}
          <div className='lg:w-1/2'>
            <label htmlFor="inputState" className="block mb-2 text-gray-700">Book Category</label>
            <select
              id="inputState"
              name="inputState" 
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
              className="w-full p-3 rounded-lg bg-gray-100 text-gray-700 border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              {bookCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Book description */}
        <div>
          <label htmlFor="bookDescription" className="block mb-2 text-gray-700">Book Description</label>
          <textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Write your book description..."
            required
            className="w-full min-h-[100px] p-3 rounded-lg bg-gray-100 text-gray-700 border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 resize-y"
            rows="4"
          />
        </div>

        {/* Book PDF URL */}
        <div>
          <label htmlFor="bookPDFURL" className="block mb-2 text-gray-700">Book PDF URL</label>
          <input 
            id="bookPDFURL"
            name='bookPDFURL'
            type="text" 
            placeholder="book pdf url" 
            required 
            className="w-full p-3 rounded-lg bg-gray-100 text-gray-700 border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <button 
          type="submit" 
          className="mt-5 w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Upload Book
        </button>
      </form>
    </div>
  );
};

export default Uploadbook;
