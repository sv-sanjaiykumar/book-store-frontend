import React from 'react';
import FavBookImg from "../assets/favoritebook.jpg";

const Dashboard = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <img src={FavBookImg} alt='' className='rounded w-full md:w-1/2 lg:w-1/3' />
      
      <div className='mt-4 text-left md:w-1/2 lg:w-1/3'>
        <h2 className='text-3xl font-bold'>
          Upload and Manage your <span className='text-blue-700'>Book Here!</span>
          <br />
          <a href="#" className='text-blue-700 font-bold'></a>
        </h2>
      </div>
    </div>
  );
}

export default Dashboard;
