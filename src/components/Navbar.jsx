import React from 'react';
import logo from "../assets/navLogo.png";

const Navbar = () => {
  return (
    <nav className="bg-[#101212] w-full py-5">
       
       <div className='px-4 container mx-auto'>
             <img
        className='w-auto h-8 md:h-10'
        src = {logo} alt = 'greenheap enterprise logo' />
       </div>
       
    </nav>
  )
}

export default Navbar