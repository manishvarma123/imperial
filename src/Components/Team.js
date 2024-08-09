import React from 'react';
import team1 from '../Images/team-1.jpg';
import team2 from '../Images/team-2.jpg';
import team3 from '../Images/team-3.jpg';
import team4 from '../Images/team-4.jpg';
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export default function Team() {
    return (
        <div id='team' className=''>
            <div className="px-3 max-w-[1320px] m-auto py-24 text-center">
                <h1 className='text-3xl font-bold mb-[20px] text-black'>OUR TEAM</h1>
                <div className="w-10 h-1 bg-[#03C4EB] mx-auto mb-[20px]"></div>
                <p className='text-lg text-[#666666] mb-7'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="w-full mb-5">
                        <div className="w-full h-[280px] overflow-hidden">
                            <img className='w-full' src={team1} alt="Team1" />
                        </div>
                        <div className="text-center">
                            <h1 className='text-black/70 text-[25px] font-bold mt-3'>Walter White</h1>
                            <p className='italic text-black/70 text-[14px]'>Chief Executive Officer</p>
                            <div className="flex justify-center mt-2 text-[25px] space-x-1 text-black/50">
                                <AiFillTwitterCircle className='hover:text-[#03C4EB]' />
                                <AiFillFacebook className='hover:text-[#03C4EB]' />
                                <AiFillInstagram className='hover:text-[#03C4EB]' />
                                <AiFillLinkedin className='hover:text-[#03C4EB]' />
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-5">
                        <div className="w-full h-[280px] overflow-hidden">
                            <img className='w-full' src={team2} alt="Team1" />
                        </div>
                        <div className="text-center">
                            <h1 className='text-black/70 text-[25px] font-bold mt-3'>Walter White</h1>
                            <p className='italic text-black/70 text-[14px]'>Chief Executive Officer</p>
                            <div className="flex justify-center mt-2 text-[25px] space-x-1 text-black/50">
                                <AiFillTwitterCircle className='hover:text-[#03C4EB]' />
                                <AiFillFacebook className='hover:text-[#03C4EB]' />
                                <AiFillInstagram className='hover:text-[#03C4EB]' />
                                <AiFillLinkedin className='hover:text-[#03C4EB]' />
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-5">
                        <div className="w-full h-[280px] overflow-hidden">
                            <img className='w-full' src={team3} alt="Team1" />
                        </div>
                        <div className="text-center">
                            <h1 className='text-black/70 text-[25px] font-bold mt-3'>Walter White</h1>
                            <p className='italic text-black/70 text-[14px]'>Chief Executive Officer</p>
                            <div className="flex justify-center mt-2 text-[25px] space-x-1 text-black/50">
                                <AiFillTwitterCircle className='hover:text-[#03C4EB]' />
                                <AiFillFacebook className='hover:text-[#03C4EB]' />
                                <AiFillInstagram className='hover:text-[#03C4EB]' />
                                <AiFillLinkedin className='hover:text-[#03C4EB]' />

                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-5">
                        <div className="w-full h-[280px] overflow-hidden">
                            <img className='w-full' src={team4} alt="Team1" />
                        </div>
                        <div className="text-center">
                            <h1 className='text-black/70 text-[25px] font-bold mt-3'>Walter White</h1>
                            <p className='italic text-black/70 text-[14px]'>Chief Executive Officer</p>
                            <div className="flex justify-center mt-2 text-[25px] space-x-1 text-black/50">
                                <AiFillTwitterCircle className='hover:text-[#03C4EB]' />
                                <AiFillFacebook className='hover:text-[#03C4EB]' />
                                <AiFillInstagram className='hover:text-[#03C4EB]' />
                                <AiFillLinkedin className='hover:text-[#03C4EB]' />

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
