import React from 'react';
import services from '../Images/services.jpg';
import { AiFillAudio } from "react-icons/ai";
import { AiFillPicture } from "react-icons/ai";
import { AiFillRead } from "react-icons/ai";
import { AiFillSketchSquare } from "react-icons/ai";
import { AiTwotoneSetting } from "react-icons/ai";
import { AiOutlineWallet } from "react-icons/ai";

export default function Services() {
  return (
    <div id='services' className='w-screen bg-center bg-cover bg-fixed' style={{ backgroundImage: `url(${services})` }}>
      <div className="w-full bg-white/90">
        <div className="px-3 max-w-[1320px] m-auto py-24 text-center">
          <h1 className='text-3xl font-bold mb-[20px]'>OUR SERVICES</h1>
          <div className="w-10 h-1 bg-[#03C4EB] mx-auto mb-[20px]"></div>
          <p className='text-lg text-[#666666] mb-7'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
          <div className="lg:grid lg:grid-cols-3 gap-8">
            <div className="flex gap-4 mb-3 group cursor-pointer">
              <div className=" inline-block h-8">
                <AiFillPicture className='sm:text-white icon bg-[#03C4EB] group-hover:bg-[white] group-hover:text-[#03C4EB] p-3 mt-1 text-[60px] rounded-full group-hover:border-[#03C4EB] group-hover:border-[2px]' />
              </div>
              <div className="text-left">
                <h2 className='text-2xl font-bold mb-2'>LOREM IPSUM</h2>
                <p className='text-[16px] text-[#666666]'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
              </div>
            </div>
            <div className="flex gap-4 mb-3 group cursor-pointer">
              <div className=" inline-block h-8">
                <AiFillRead className='sm:text-white icon bg-[#03C4EB] group-hover:bg-[white] group-hover:text-[#03C4EB] p-3 mt-1 text-[60px] rounded-full group-hover:border-[#03C4EB] group-hover:border-[2px]' />
              </div>
              <div className="text-left">
                <h2 className='text-2xl font-bold mb-2'>DOLOR SITEMA</h2>
                <p className='text-[16px] text-[#666666]'>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
              </div>
            </div>
            <div className="flex gap-4 mb-3 group cursor-pointer">
              <div className=" inline-block h-8">
                <AiFillAudio className='sm:text-white icon bg-[#03C4EB] group-hover:bg-[white] group-hover:text-[#03C4EB] p-3 mt-1 text-[60px] rounded-full group-hover:border-[#03C4EB] group-hover:border-[2px]' />
              </div>
              <div className="text-left">
                <h2 className='text-2xl font-bold mb-2'>SED UT PERSPICIATIS</h2>
                <p className='text-[16px] text-[#666666]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
              </div>
            </div>
            <div className="flex gap-4 mb-3 group cursor-pointer">
              <div className=" inline-block h-8">
                <AiFillSketchSquare className='sm:text-white icon bg-[#03C4EB] group-hover:bg-[white] group-hover:text-[#03C4EB] p-3 mt-1 text-[60px] rounded-full group-hover:border-[#03C4EB] group-hover:border-[2px]' />
              </div>
              <div className="text-left">
                <h2 className='text-2xl font-bold mb-2'>MIGNI DOLORES</h2>
                <p className='text-[16px] text-[#666666]'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </div>
            </div>
            <div className="flex gap-4 mb-3 group cursor-pointer">
              <div className=" inline-block h-8">
                <AiTwotoneSetting className='sm:text-white icon bg-[#03C4EB] group-hover:bg-[white] group-hover:text-[#03C4EB] p-3 mt-1 text-[60px] rounded-full group-hover:border-[#03C4EB] group-hover:border-[2px]' />
              </div>
              <div className="text-left">
                <h2 className='text-2xl font-bold mb-2'>NEMO ENIM</h2>
                <p className='text-[16px] text-[#666666]'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
              </div>
            </div>
            <div className="flex gap-4 mb-3 group cursor-pointer">
              <div className=" inline-block h-8">
                <AiOutlineWallet className='sm:text-white icon bg-[#03C4EB] group-hover:bg-[white] group-hover:text-[#03C4EB] p-3 mt-1 text-[60px] rounded-full group-hover:border-[#03C4EB] group-hover:border-[2px]' />
              </div>
              <div className="text-left">
                <h2 className='text-2xl font-bold mb-2'>EIUSMOD TEMPOR</h2>
                <p className='text-[16px] text-[#666666]'>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
