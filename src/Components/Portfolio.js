import React from 'react';
import port1 from '../Images/portfolio-1.jpg';
import port2 from '../Images/portfolio-2.jpg';
import port3 from '../Images/portfolio-3.jpg';
import port4 from '../Images/portfolio-4.jpg';
import port5 from '../Images/portfolio-5.jpg';
import port6 from '../Images/portfolio-6.jpg';
import port7 from '../Images/portfolio-7.jpg';
import port8 from '../Images/portfolio-8.jpg';
import port9 from '../Images/portfolio-9.jpg';
import $ from 'jquery';
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineZoomOut } from "react-icons/ai";

export default function Portfolio() {

    $(document).ready(function () {
        $(".filter-button").click(function () {
            var value = $(this).attr("data-filter");

            if (value == "all") {
                // $('.filter').removeClass('hidden');
                $(".filter").show("2000");
            } else {
                //  $('.filter[filter-item="'+value+'"]').removeClass('hidden');
                //  $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
                $(".filter")
                    .not("." + value)
                    .hide("3000");
                $(".filter")
                    .filter("." + value)
                    .show("3000");
            }
        });

        if ($(".filter-button").removeClass("active")) {
            $(this).removeClass("active");
        }
        $(this).addClass("active");
    });

    return (
        <div id='portfolio' className='text-white'>
            <div className="px-3 max-w-[1320px] m-auto py-24 text-center">
                <h1 className='text-3xl font-bold mb-[20px] text-black'>PORTFOLIO</h1>
                <div className="w-10 h-1 bg-[#03C4EB] mx-auto mb-[20px]"></div>
                <p className='text-lg text-[#666666] mb-7'>Si stante, hoc natura videlicet vult, salvam esse se, quod concedimus ses haec dicturum fuisse</p>
                <ul className='text-center mb-10'>
                    <li active className='inline-block px-[10px] py-[20px]'><a className='filter-button rounded-lg cursor-pointer text-[#03C4EB] px-[10px] py-[5px] hover:bg-[#03C4EB] hover:text-white duration-500' data-filter='all'>ALL</a></li>
                    <li className='inline-block px-[10px] py-[20px]'><a className='filter-button rounded-lg cursor-pointer text-[#03C4EB] px-[10px] py-[5px] hover:bg-[#03C4EB] hover:text-white duration-500' data-filter='app'>APP</a></li>
                    <li className='inline-block px-[10px] py-[20px]'><a className='filter-button rounded-lg cursor-pointer text-[#03C4EB] px-[10px] py-[5px] hover:bg-[#03C4EB] hover:text-white duration-500' data-filter='card'>CARD</a></li>
                    <li className='inline-block px-[10px] py-[20px]'><a className='filter-button rounded-lg cursor-pointer text-[#03C4EB] px-[10px] py-[5px] hover:bg-[#03C4EB] hover:text-white duration-500' data-filter='web'>WEB</a></li>
                </ul>
                <div className="filters-content">
                    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="filter all app mb-8 md:mb-0 overflow-hidden relative group">
                            <img src={port1} alt="" />
                            <div className="hidden duration-500 group-hover:block">
                                <div className="w-full absolute bottom-0 left-0 text-left bg-white/85 flex justify-between items-center text-black px-4 py-3" >
                                    <div className="">
                                        <h1 className='font-bold text-[18px]'>App 1</h1>
                                        <p>App</p>
                                    </div>
                                    <div className="flex justify-start items-center space-x-2 text-[25px]">
                                        <AiOutlinePlus className='hover:text-[#03C4EB]' />
                                        <AiOutlineZoomOut className='hover:text-[#03C4EB]' />
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="filter all web mb-8 md:mb-0 overflow-hidden relative group">
                            <img src={port2} alt="" />
                            <div className="hidden duration-500 group-hover:block">
                                <div className="w-full absolute bottom-0 left-0 text-left bg-white/85 flex justify-between items-center text-black px-4 py-3" >
                                    <div className="">
                                        <h1 className='font-bold text-[18px]'>Web 1</h1>
                                        <p>Web</p>
                                    </div>
                                    <div className="flex justify-start items-center space-x-2 text-[25px]">
                                        <AiOutlinePlus className='hover:text-[#03C4EB]' />
                                        <AiOutlineZoomOut className='hover:text-[#03C4EB]' />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="filter all app mb-8 md:mb-0 overflow-hidden relative group">
                            <img src={port3} alt="" />
                            <div className="hidden duration-500 group-hover:block">
                                <div className="w-full absolute bottom-0 left-0 text-left bg-white/85 flex justify-between items-center text-black px-4 py-3" >
                                    <div className="">
                                        <h1 className='font-bold text-[18px]'>App 2</h1>
                                        <p>App</p>
                                    </div>
                                    <div className="flex justify-start items-center space-x-2 text-[25px]">
                                        <AiOutlinePlus className='hover:text-[#03C4EB]' />
                                        <AiOutlineZoomOut className='hover:text-[#03C4EB]' />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="filter all card mb-8 md:mb-0 overflow-hidden relative group">
                            <img src={port4} alt="" />
                            <div className="hidden duration-500 group-hover:block">
                                <div className="w-full absolute bottom-0 left-0 text-left bg-white/85 flex justify-between items-center text-black px-4 py-3" >
                                    <div className="">
                                        <h1 className='font-bold text-[18px]'>Card 1</h1>
                                        <p>Card</p>
                                    </div>
                                    <div className="flex justify-start items-center space-x-2 text-[25px]">
                                        <AiOutlinePlus className='hover:text-[#03C4EB]' />
                                        <AiOutlineZoomOut className='hover:text-[#03C4EB]' />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="filter all web mb-8 md:mb-0 overflow-hidden relative group">
                            <img src={port5} alt="" />
                            <div className="hidden duration-500 group-hover:block">
                                <div className="w-full absolute bottom-0 left-0 text-left bg-white/85 flex justify-between items-center text-black px-4 py-3" >
                                    <div className="">
                                        <h1 className='font-bold text-[18px]'>Web 2</h1>
                                        <p>Web</p>
                                    </div>
                                    <div className="flex justify-start items-center space-x-2 text-[25px]">
                                        <AiOutlinePlus className='hover:text-[#03C4EB]' />
                                        <AiOutlineZoomOut className='hover:text-[#03C4EB]' />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="filter all app mb-8 md:mb-0 overflow-hidden relative group">
                            <img src={port6} alt="" />
                            <div className="hidden duration-500 group-hover:block">
                                <div className="w-full absolute bottom-0 left-0 text-left bg-white/85 flex justify-between items-center text-black px-4 py-3" >
                                    <div className="">
                                        <h1 className='font-bold text-[18px]'>App 3</h1>
                                        <p>App</p>
                                    </div>
                                    <div className="flex justify-start items-center space-x-2 text-[25px]">
                                        <AiOutlinePlus className='hover:text-[#03C4EB]' />
                                        <AiOutlineZoomOut className='hover:text-[#03C4EB]' />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="filter all card mb-8 md:mb-0 overflow-hidden relative group">
                            <img src={port7} alt="" />
                            <div className="hidden duration-500 group-hover:block">
                                <div className="w-full absolute bottom-0 left-0 text-left bg-white/85 flex justify-between items-center text-black px-4 py-3" >
                                    <div className="">
                                        <h1 className='font-bold text-[18px]'>Card 2</h1>
                                        <p>Card</p>
                                    </div>
                                    <div className="flex justify-start items-center space-x-2 text-[25px]">
                                        <AiOutlinePlus className='hover:text-[#03C4EB]' />
                                        <AiOutlineZoomOut className='hover:text-[#03C4EB]' />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="filter all card mb-8 md:mb-0 overflow-hidden relative group">
                            <img src={port8} alt="" />
                            <div className="hidden duration-500 group-hover:block">
                                <div className="w-full absolute bottom-0 left-0 text-left bg-white/85 flex justify-between items-center text-black px-4 py-3" >
                                    <div className="">
                                        <h1 className='font-bold text-[18px]'>Card 3</h1>
                                        <p>Card</p>
                                    </div>
                                    <div className="flex justify-start items-center space-x-2 text-[25px]">
                                        <AiOutlinePlus className='hover:text-[#03C4EB]' />
                                        <AiOutlineZoomOut className='hover:text-[#03C4EB]' />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="filter all web mb-8 md:mb-0 overflow-hidden relative group">
                            <img src={port9} alt="" />
                            <div className="hidden duration-500 group-hover:block">
                                <div className="w-full absolute bottom-0 left-0 text-left bg-white/85 flex justify-between items-center text-black px-4 py-3" >
                                    <div className="">
                                        <h1 className='font-bold text-[18px]'>Web 3</h1>
                                        <p>Web</p>
                                    </div>
                                    <div className="flex justify-start items-center space-x-2 text-[25px]">
                                        <AiOutlinePlus className='hover:text-[#03C4EB]' />
                                        <AiOutlineZoomOut className='hover:text-[#03C4EB]' />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
