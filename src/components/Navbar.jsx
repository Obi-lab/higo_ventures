import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from '../assets/logo.png';

function Navbar() {
  return (
    <header className='bg-white mt-1 w-[94%] mx-auto'>
        <nav className='flex justify-between items-center  '>
            <div>
                <img className="w-24 " src={Logo}/>
            </div>
            <div className=' md:static md:min-h-fit absolute md:w-auto min-h-[60vh] left-0 top-[-100%] w-full items-center px-5'>
                <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vh] gap-8'>
                    <li>
                        <a className='hover:text-gray-600 text-slate-700' href='#home'>
                            Home
                        </a>
                    </li>
                    <li>
                        <a className='hover:text-gray-600 text-slate-700' href='#services'>Services</a>
                    </li>
                    <li>
                        <a className='hover:text-gray-600 text-slate-700' href='#testimonials'>Testimonials</a>
                    </li>
                    <li>
                        <a className='hover:text-gray-600 text-slate-700' href='#about'>About Us</a>
                    </li>
                    <li>
                        <a className='hover:text-gray-600 text-slate-700' href='#'>Blog</a>
                    </li>
                </ul>
            </div>
            <div>
                <Link to='https://wa.me/254748370829'>
                    <button className='bg-[#1f3528] text-white px-5 py-2 rounded-full hover:bg-[#87acec]'>
                        Contact Us
                    </button>
                </Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar;