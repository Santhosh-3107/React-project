import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/*---Left Section----*/}
        <div>
          <h1 style={{ color: '#0099C8', fontSize: '20px', fontWeight: 'bold', textAlign: 'left', margin: '20px 20px 10px 0px' }}>
            ASDSR Hospitals
          </h1>
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        {/*---Center Section------*/}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <Link to="/" className="hover:text-black transition duration-200">
              <li className='cursor-pointer'>Home</li>
            </Link>
            <Link to="/about" className="hover:text-black transition duration-500">
              <li className='cursor-pointer'>About Us</li>
            </Link>
            <Link to="/contact" className="hover:text-black transition duration-200">
              <li className='cursor-pointer'>Contact Us</li>
            </Link>
            <Link to="/privacy" className="hover:text-black transition duration-200">
              <li className='cursor-pointer'>Privacy Policy</li>
            </Link>
          </ul>
        </div>

        {/*---Right Section------*/}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+1-212-454-7890</li>
            <li>
              <a href="mailto:asdsrhospital@gmail.com" className="text-gray-600">
                asdsrhospital@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/*---Copyright---*/}
      <div>
        <hr />
        <p className='py-5 text-center'>Copyright 2024 @ asdsrhospital - All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
