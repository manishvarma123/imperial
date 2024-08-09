import React from 'react';
import { AiTwotoneHome } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { AiFillMobile } from "react-icons/ai";

export default function Contact() {
    return (
        <>
        <div id='contact' className='w-full bg-[#f5f5f5]'>
            <div className="px-3 max-w-[1320px] m-auto py-24 text-center">
                <h1 className='text-3xl font-bold mb-[20px] text-black'>CONTACT US</h1>
                <div className="w-10 h-1 bg-[#03C4EB] mx-auto mb-[20px]"></div>
                <p className='text-lg text-[#666666] mb-7'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                <div className="max-w-[900px] m-auto md:flex gap-10">
                    <div className="md:w-1/3">
                        <div className="flex justify-start mb-7">
                            <AiTwotoneHome className='text-[#03C4EB] text-[28px] mx-4 mt-1'/>
                            <p className='text-left text-[17px]'>A108 Adam Street<br />New York, NY 535022</p>
                        </div>
                        <div className="flex justify-start mb-7">
                            <AiTwotoneMail className='text-[#03C4EB] text-[28px] mx-4 mt-1'/>
                            <p className='text-left text-[17px]'>info@example.com</p>
                        </div>
                        <div className="flex justify-start mb-7">
                            <AiFillMobile className='text-[#03C4EB] text-[28px] mx-4 mt-1'/>
                            <p className='text-left text-[17px]'>+1 5589 55488 555</p>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <input type="text" className='border-2 border-black/30 w-full px-2 py-1 mb-4' placeholder='Your Name' />
                        <input type="text" className='border-2 border-black/30 w-full px-2 py-1 mb-4' placeholder='Your Email' />
                        <input type="text" className='border-2 border-black/30 w-full px-2 py-1 mb-4' placeholder='Subject' />
                        <textarea id="" cols="30" rows="5" className='border-2 border-black/30 w-full px-2 py-1 mb-4' placeholder='Message'></textarea>
                        <button className='bg-[#03C4EB] px-4 py-2 text-white hover:bg-[#03C4EB]/[0.8]'>Send Message</button>
                    </div>
                </div>

            </div>
        </div>
        <div className="w-full bg-black py-10 text-center">
            <p className='text-white text-[20px]'>© Copyright Imperial Theme. All Rights Reserved</p>
            <p className='text-gray-400'>Designed by <span className='text-[#03C4EB]'>Manish Varma</span></p>
        </div>
        </>
    )
}
