import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from './context/AuthContext';


const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
     <div className="navbar flex flex-row  items-center justify-between p-4 md:mt-2 bg-black"
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
   
      <div className='flex items-center w-[20%] mb-4 sm:mb-0'>
        <Link to="/">
          <h1 className='text-teal-500 text-2xl font-bold cursor-pointer'>
            NaturesPro
          </h1>
        </Link>

        {user?.email ? (
          <Link to="/account">
            <button className='text-teal-500 px-6 py-2 font-bold rounded cursor-pointer'>
               Account
            </button>
          </Link>
        ) : null}
      </div>
           <div className='md:flex grid absolute md:relative mt-[122px] md:mt-0 '>


       </div> 
      <div>
        {user?.email ? (
          <button
            onClick={handleLogout}
            className='bg-teal-500 text-white px-6 py-2 rounded cursor-pointer'
          >
            Logout
          </button>
        ) : (
          <div>
            <Link to="/login">
              <button className='text-teal-500 px-6 py-2 rounded cursor-pointer'>
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className='bg-teal-500 text-white px-6 py-2 rounded cursor-pointer'>
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
