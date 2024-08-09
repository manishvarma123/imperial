import React from 'react';
import logo from '../Images/logo.png';
import { AiOutlineMenu } from "react-icons/ai";

export default function Nav() {
  let num = 0;
  const show = () => {
    if(num == 0){
      document.getElementById('icon').style.display= "block";
      num=1;
    }
    else{
      document.getElementById('icon').style.display= "none";
      num=0;
    }
  }
  return (
    <div className='bg-black/55 py-[10px] w-screen  sticky top-0 z-50 backdrop-blur-sm'>
      <div className="w-full lg:max-w-[1320px] mx-auto px-[10px] lg:py-2 flex items-center justify-between">
        <a href="">
          <img className='h-12' src={logo} alt="Imperial" />
        </a>
        <div className="lg:hidden">
          <AiOutlineMenu className='sm:text-white px-[5px] py-[5px] text-[30px] rounded-sm border-2 border-white hover:text-black cursor-pointer' onClick={()=>show()}/>
        </div>
        <ul className='text-white space-x-6 hidden lg:block '>
          <li className='inline-block'><a className='hover:text-[#03C4EB]' href="#home">Home</a></li>
          <li className='inline-block'><a className='hover:text-[#03C4EB]' href="#about">About</a></li>
          <li className='inline-block'><a className='hover:text-[#03C4EB]' href="#services">Services</a></li>
          <li className='inline-block'><a className='hover:text-[#03C4EB]' href="#portfolio">Portfolio</a></li>
          <li className='inline-block'><a className='hover:text-[#03C4EB]' href="#testimonials">Testimonials</a></li>
          <li className='inline-block'><a className='hover:text-[#03C4EB]' href="#team">Team</a></li>
          <li className='inline-block'><a className='hover:text-[#03C4EB]' href="#dropdown">Drop Down</a></li>
          <li className='inline-block'><a className='hover:text-[#03C4EB]' href="#contact">Contact</a></li>
        </ul>
      </div>
      <div id='icon' className="hidden">
        <ul className='text-white pl-3 py-3'>
          <li className='my-[4px] text-[17px]'><a className='hover:text-[#03C4EB]' href='#home' onClick={()=>show()}>Home</a></li>
          <li className='my-[4px] text-[17px]'><a className='hover:text-[#03C4EB]' href="#about" onClick={()=>show()}>About</a></li>
          <li className='my-[4px] text-[17px]'><a className='hover:text-[#03C4EB]' href="#services" onClick={()=>show()}>Services</a></li>
          <li className='my-[4px] text-[17px]'><a className='hover:text-[#03C4EB]' href="#portfolio" onClick={()=>show()}>Portfolio</a></li>
          <li className='my-[4px] text-[17px]'><a className='hover:text-[#03C4EB]' href="#testimonials" onClick={()=>show()}>Testimonials</a></li>
          <li className='my-[4px] text-[17px]'><a className='hover:text-[#03C4EB]' href="#team" onClick={()=>show()}>Team</a></li>
          <li className='my-[4px] text-[17px]'><a className='hover:text-[#03C4EB]' href="#dropdown" onClick={()=>show()}>Drop Down</a></li>
          <li className='my-[4px] text-[17px]'><a className='hover:text-[#03C4EB]' href="#contact" onClick={()=>show()}>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}
