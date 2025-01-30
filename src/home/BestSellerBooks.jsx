import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const BestSellerBooks = () => {

    const [books,setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data))
    },[])
  return (
    <div>
      <BookCards books={books} headLine="Best seller books"/>
    </div>
  )
}

export default BestSellerBooks
