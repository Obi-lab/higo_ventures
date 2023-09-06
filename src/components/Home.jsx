import React from 'react'
import Design1 from '../assets/design1.jpg'
import Design2 from '../assets/design2.jpg'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='mt-2 w-[94%] mx-auto pt-5 mt-3 ; ' id="home">
        <div className='flex flex-col md:flex-row gap-10'>
            <div className='md:w-[70%] '>
                <div>
                    <p className='md:text-4xl text-xl'>We Turn Your Dreams & Visions Into Cost-Efficient Realities</p>    
                </div>

                <div className='flex flex-col md:flex-row gap-10 mt-4'>
                    <div className='md:w-[50%]'>
                        <div>
                            <p className='text-sm'>At Higo, we pride ourselves on turning your dreams into affordable, high-quality homes.
                            We bring your vision to life without breaking the bank
                            </p>
                        </div>

                        <div className='flex flex-row mt-3'>
                            <Link  to='https://wa.me/254748370829'>
                                <button className='bg-[#1f3528] text-white px-5 py-1  my-1 rounded-full'>Connect</button>
                            </Link>
                            
                            {/* <button className='border border-slat-950 px-5 py-1 ml-4 my-1 rounded-full'>See More</button> */}
                        </div>
                        <div className='mt-4'>
                            <img className='rounded-2xl' src={Design1}/>
                        </div>

                    </div>

                    <div className='md:static absolute md:w-[50%] top-[-100%]'>
                        
                        <img className='rounded-2xl h-[100%]' src={Design2}/>
                        
                    </div>  
                </div>
            </div>
            <div className='md:w-[30%] '>
                        
                <img className='rounded-2xl h-[85%]' src={Design2}/>

                <Link to='/portfolio'>
                    <button className='px-5 py-1 flex mt-5 rounded-full'>
                        Portfolio 
                        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </span>
                    </button>
                </Link>        
                        
            </div> 
        </div>

        <div className='flex mt-3 mx-auto text-white justify-between md:w-[60%] '>
            <button className='bg-[#1f3528] text-white px-5 py-1 text-xs my-1 md:text-base rounded-full'>
                <p>10 Total Projects</p>
            </button>
            <button className='border bg-[#1f3528] text-white px-5 py-1 ml-4 my-1 text-xs md:text-base rounded-full'>
                10 Clients
            </button>
            <button className='border bg-[#1f3528] text-white px-5 py-1 ml-4 my-1 text-xs md:text-base rounded-full'>
                10 Completed Projects 
            </button>
        </div>

        
        
    </div>
  )
}

export default Home