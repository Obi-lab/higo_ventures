import React from 'react'
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className='w-[94%] mx-auto pt-5 mt-3  items-center' id="services">

        <div className='flex md:flex-row flex-col gap-10'>
            <div className='md:w-[50%]'>
                <p className='py-2 text-2xl'>Our Services</p>
                <p className='text-2xl py-2'>Get high quality and affordable services  at Higo </p>
                 
                <div className='mt-2 py-2 px-2 bg-[#1f3528] text-white rounded-3xl'>
                    <div className='p-2 border-t border-r border-gray-300  w-14 h-14 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                        <path fillRule="evenodd" d="M19.253 2.292a.75.75 0 01.955.461A28.123 28.123 0 0121.75 12c0 3.266-.547 6.388-1.542 9.247a.75.75 0 11-1.416-.494c.94-2.7 1.458-5.654 1.458-8.753s-.519-6.054-1.458-8.754a.75.75 0 01.461-.954zm-14.227.013a.75.75 0 01.414.976A23.183 23.183 0 003.75 12c0 3.085.6 6.027 1.69 8.718a.75.75 0 01-1.39.563c-1.161-2.867-1.8-6-1.8-9.281 0-3.28.639-6.414 1.8-9.281a.75.75 0 01.976-.414zm4.275 5.052a1.5 1.5 0 012.21.803l.716 2.148L13.6 8.246a2.438 2.438 0 012.978-.892l.213.09a.75.75 0 11-.584 1.381l-.214-.09a.937.937 0 00-1.145.343l-2.021 3.033 1.084 3.255 1.445-.89a.75.75 0 11.786 1.278l-1.444.889a1.5 1.5 0 01-2.21-.803l-.716-2.148-1.374 2.062a2.437 2.437 0 01-2.978.892l-.213-.09a.75.75 0 01.584-1.381l.214.09a.938.938 0 001.145-.344l2.021-3.032-1.084-3.255-1.445.89a.75.75 0 11-.786-1.278l1.444-.89z" clipRule="evenodd" />
                        </svg>
                        
                    </div>
                    <p className='text-xl py-1'>Design</p>
                    <p className='text-sm py-1 w-[70%]'>
                    Elevate Your Space: Our expert designers craft beautiful and functional environments tailored to your 
                    unique vision
                    </p>
                    <button className='py-2 w-[30%]  gap-4 flex'>
                        <p>Get</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>

                    </button>

                </div>
                

            </div>
            <div className='md:w-[50%]'>
                <p className=''>
                    We redefine construction excellence with tech-driven solutions.
                    Work with us to empower your construction projects through tech-enabled solutions
                </p>
                <div className='flex flex-row mt-3'>
                    <Link to='https://wa.me/254748370829'>
                        <button className='bg-[#1f3528] text-white px-5 py-1  my-1 rounded-full'>Connect</button>
                    </Link>
                    <Link to='/portfolio'>
                        <button className='border border-[#1f3528] px-5 py-1 ml-4 my-1 rounded-full'>See More</button>
                    </Link>
                </div>

                <div className='mt-2 py-2 px-2 border border-gray-300 text-gray-900 rounded-3xl'>
                    <div className='p-2 border-t border-r border-gray-300  w-14 h-14 rounded-full'>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                        <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
                        <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
                        <path fillRule="evenodd" d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <p className='text-xl py-1'>Quantity Survey</p>
                    <p className='text-sm py-1 w-[70%]'>
                    Trust our experienced Quantity Surveyors to expertly guide your construction project on 
                    the right financial track.
                    </p>
                    <button className='py-2 w-[30%]  gap-4 flex'>
                        <p>Get</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>

                    </button>

                </div>
                
                
            </div>
        </div>

        

    </div>
  )
}

export default Services;