import React from 'react';
import about from '../Images/about.jpg';

export default function About() {
  return (
    <div id='about' className='w-screen bg-white'>
        <div className="max-w-[1320px] mx-auto py-16 text-center px-3">
            <h1 className='text-3xl font-bold mb-[20px]'>ABOUT US</h1>
            <div className="w-10 h-1 bg-[#03C4EB] mx-auto mb-[20px]"></div>
            <p className='text-[#666666] mb-10'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
            <div className="lg:flex gap-6">
                <div className="basis-1/2 mb-3">
                    <img src={about} alt="About" />
                </div>
                <div className="basis-1/2 text-left text-[#666666] text-[17px]">
                    <h1 className='text-black text-3xl font-bold mb-4'>We provide great services and ideass</h1>
                    <p className='mb-4 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                    <p className='mb-4 text-justify'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <p className='mb-4 text-justify'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molli.</p>
                </div>
            </div>
        </div>
    </div>
    
  )
}
