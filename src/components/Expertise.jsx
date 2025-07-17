import React from 'react';
import expertise from "../assets/expertise.png";

const Expertise = () => {
  return (
    <div>
        <img 
        className='mt-16 h-auto md:h-40 w-auto mx-auto'
        src = {expertise} alt = 'our expertise' />
    </div>
  )
}

export default Expertise