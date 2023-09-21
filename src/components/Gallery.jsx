import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  // Sample image URLs, you can replace these with your own images
  const imageUrls = [
    'https://images.unsplash.com/photo-1694215685811-62b2972e3f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1694430066046-74bac61ab5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
    'https://images.unsplash.com/photo-1695064907358-4d09ab23b38a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
    // Add more image URLs as needed
  ];

  return (
    <>
      <div className='w-full h-full'>
        <img
          className='w-full h-[300px] object-cover'
          src='https://cdn.pixabay.com/photo/2020/01/10/12/49/milk-4755234_640.jpg'
          alt='/'
        />
       
        <div className='absolute top-[12%] p-4 mx-4'>
          <div className='bg-white p-4 md:p-8 rounded mb-8 mt-[8%] md:mt-[4%]'>
            <h1 className='text-2xl md:text-5xl font-bold text-teal-500 mb-4'>
              Welcome to NaturesPro Gallery...
            </h1>
            <p className='text-teal-900 text-xl'>
              Login to view and search for beautiful images, access our drag and drop feature
            </p>
            <Link
              className='hover:text-teal-300 font-bold text-xl text-teal-500 cursor-pointer'
              to='/login'
            >
              Login
            </Link>
          </div>
        </div>
        <div className='bg-white'>
          <div className='max-w-screen-xl mx-auto p-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {imageUrls.map((imageUrl, index) => (
                <div key={index} className='rounded overflow-hidden shadow-lg'>
                  <img
                    src={imageUrl}
                    alt={`Image ${index}`}
                    className='w-full h-auto'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
