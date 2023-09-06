import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

function Nav() {
  return (
    <header className='bg-white mt-1 w-[94%] mx-auto'>
        <nav className='flex justify-between items-center  '>
            <div>
                <img className="w-24 " src={Logo}/>
            </div>
            <div className=' md:static md:min-h-fit absolute md:w-auto min-h-[60vh] left-0 top-[-100%] w-full items-center px-5'>
                <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vh] gap-8'>
                    <Link to='/home' className='hover:text-gray-600 text-slate-700'>
                        Home   
                    </Link>
                    <Link to='/portfolio' className='hover:text-gray-600 text-slate-700'>
                        Portfolio   
                    </Link>
                    <Link to='/home' className='hover:text-gray-600 text-slate-700'>
                        Blog  
                    </Link>
                    
                </ul>
            </div>
            <div>
                <Link to='https://wa.me/254748370829'>
                    <button className='bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]'>
                    Contact Us
                    </button>
                </Link>
            </div>
        </nav>
    </header>
  )
}

export default Nav;