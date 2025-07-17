import React from 'react';
import farmsGif from "../assets/farms.gif";

const Farms = () => {
  return (
    <div className="text-left mt-20">
        <div className='sm:px-28'>
            <section className="relative flex items-center w-full">
                <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
                <div className="relative flex-col items-start m-auto align-middle">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                    <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                        <div className="max-w-xl text-center lg:text-left">
                        <div>

                            <p className="text-3xl font-semibold tracking-tight text-[#201515] sm:text-5xl">
                            Greenheap Cashback Farms
                            </p>
                            <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                            Your gateway to rewarding agricultural investments. We blend modern farming with smart cashback opportunities, so you can cultivate your portfolio while supporting sustainable growth. Experience a fresh approach to investing—where your money works as hard as you do. Thanks for stopping by!
                            </p>
                        </div>
                        <div className="flex justify-center gap-3 mt-10 lg:justify-start">
                            <a className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600" href="https://www.cashbackfarms.com/" target='_blank' rel="noreferrer">
                            <span> Visit site &nbsp; → </span>
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                        <img className="object-cover rounded-3xl object-center w-full mx-auto bg-gray-300 lg:ml-auto " alt="hero" 
                        src={farmsGif}
                         />
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Farms