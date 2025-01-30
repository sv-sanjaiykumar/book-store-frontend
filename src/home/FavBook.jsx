import React from 'react'
import FavBookImg from "../assets/favoritebook.jpg"
import {Link} from "react-router-dom"

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
           <div className='md:w-1/2'>
               <img src={FavBookImg} alt=''className='rounded md:w-10/12'/>
           </div>

           <div className='md:w-1/2 space-y-6'>
               <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find your Favorite <span className='text-blue-700'>Book Here!</span></h2>
               <p className='md:10 text-lg mg:w-5/6'>Discover your next favorite book with ease! Whether you're searching for a classic or something new, our platform helps you find and manage books effortlessly. Start exploring today! 📚✨</p>
               {/* stats */}
               <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my:14'>
                  <div>
                     <h3 className='text-3xl font-bold'>100+</h3>
                     <p className='text-base'>Book Listing</p>
                  </div>
                  <div>
                     <h3 className='text-3xl font-bold'>250+</h3>
                     <p className='text-base'>Register Users</p>
                  </div>
                  <div>
                     <h3 className='text-3xl font-bold'>200+</h3>
                     <p className='text-base'>PDF Download</p>
                  </div>
               </div>

               <Link to="/shop" className='mt-8 block'><button className='bg-blue-700 px-6 py-2 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all ease-in duration-200'>Explore more</button></Link>
           </div>
    </div>
  )
}

export default FavBook
