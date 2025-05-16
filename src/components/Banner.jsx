import React, { useState, useEffect } from 'react';
import BannerCard from '../home/BannerCard';

const Banner = () => {
    const [books, setBooks] = useState([]); // Store book data
    const [searchTerm, setSearchTerm] = useState(""); // Store user input
    const [filteredBooks, setFilteredBooks] = useState([]); // Store filtered book

    // Filter books based on search term
    useEffect(() => {
        if (searchTerm.trim() === "") {
            setFilteredBooks([]);
        } else {
            setFilteredBooks(
                books.filter((book) =>
                    book.title.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }
    }, [searchTerm, books]);

    return (
        <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
            <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
                {/* Left Side */}
                <div className='md:w-1/2 space-y-8 h-full'>
                    <h2 className='text-5xl font-bold leading-snug text-black'>
                        Buy and Sell Your Book <span className='text-blue-700'>For the Best Prices</span>
                    </h2>
                    <p className='md:w-4/5'>
                        Our Book Inventory website makes managing books effortless. You can add, update, delete, and search books easily. With a clean interface and smooth performance, it’s perfect for organizing your personal or library collection. 📚✨
                    </p>
                    <div className="relative">
                        {/* Dropdown Search Results */}
                        {filteredBooks.length > 0 && (
                            <ul className="absolute bg-white w-full border rounded mt-1 shadow-lg max-h-60 overflow-y-auto z-10">
                                {filteredBooks.map((book) => (
                                    <li 
                                        key={book.id} 
                                        className="p-2 hover:bg-gray-200 cursor-pointer"
                                        onClick={() => setSearchTerm(book.title)} // Click to select
                                    >
                                        {book.title}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                {/* Right Side */}
                <div>
                    <BannerCard />
                </div>
            </div>
        </div>
    );
};

export default Banner;
