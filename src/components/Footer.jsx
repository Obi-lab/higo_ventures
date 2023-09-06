import React from 'react'
import Logo from '../assets/logo.png'

function Footer() {
  return (
    <footer className='w-[94%] mx-auto mt-2  items-center'>
      <div className=' items-center flex flex-col w-[100%] '>
        <img className='w-24' src={Logo}/>
        <p>Higo Ventures</p>
      </div>
    </footer>
  )
}

export default Footer