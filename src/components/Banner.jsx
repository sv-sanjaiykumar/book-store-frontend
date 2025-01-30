import React, { useState, useEffect } from 'react';
import BannerCard from '../home/BannerCard';

const Banner = () => {
    const [books, setBooks] = useState([]); // Store book data
    const [searchTerm, setSearchTerm] = useState(""); // Store user input
    const [filteredBooks, setFilteredBooks] = useState([]); // Store filtered books

    // Fetch books from database (Replace with actual API call)
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                // Replace this with your actual API call
                const bookData = [
                    { id: 1, title: "The Great Gatsby" },
                    { id: 2, title: "To Kill a Mockingbird" },
                    { id: 3, title: "1984" },
                    { id: 4, title: "Moby Dick" },
                    { id: 5, title: "Pride and Prejudice" },
                    { id: 6, title: "War and Peace" },
                    { id: 7, title: "The Catcher in the Rye" },
                    { id: 8, title: "The Hobbit" },
                    { id: 9, title: "Harry Potter" },
                    { id: 10, title: "Lord of the Rings" },
                    { id: 11, title: "Brave New World" },
                    { id: 12, title: "Crime and Punishment" },
                    { id: 13, title: "Anna Karenina" },
                    { id: 14, title: "Fahrenheit 451" },
                    { id: 15, title: "Wuthering Heights" },
                    { id: 16, title: "The Odyssey" },
                    { id: 17, title: "The Divine Comedy" },
                    { id: 18, title: "Dracula" },
                    { id: 19, title: "Frankenstein" },
                    { id: 20, title: "Jane Eyre" },
                    { id: 21, title: "Les Misérables" },
                    { id: 22, title: "The Brothers Karamazov" },
                    { id: 23, title: "One Hundred Years of Solitude" },
                    { id: 24, title: "A Tale of Two Cities" },
                    { id: 25, title: "Don Quixote" },
                    { id: 26, title: "The Alchemist" },
                    { id: 27, title: "The Book Thief" },
                    { id: 28, title: "The Little Prince" },
                    { id: 29, title: "The Fault in Our Stars" },
                    { id: 30, title: "Percy Jackson" }
                ];
                setBooks(bookData);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };

        fetchBooks();
    }, []);

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
                        {/* Search Bar */}
                        <input 
                            type="search" 
                            name="search" 
                            id="search" 
                            placeholder='Search a book' 
                            className='py-2 px-2 w-full rounded-s-sm outline-none bg-white' 
                            value={searchTerm} 
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className='bg-blue-700 px-6 py-2 text-white font-medium rounded hover:bg-black transition-all ease-in duration-200'>
                            Search
                        </button>

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
