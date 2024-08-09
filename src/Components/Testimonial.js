import React from 'react';
import test1 from '../Images/testimonials-1.jpg';
import test2 from '../Images/testimonials-2.jpg';
import test3 from '../Images/testimonials-3.jpg';
import test4 from '../Images/testimonials-4.jpg';
import test5 from '../Images/testimonials-5.jpg';
import { AiFillStar } from "react-icons/ai";


export default function Testimonial() {
    return (
        <div id='testimonials' className='w-full bg-[#f3f3f3]'>
            <div className="px-3 max-w-[800px] m-auto py-24 text-center">
                <h1 className='text-3xl font-bold mb-[20px] text-black'>Testimonials</h1>
                <div className="w-10 h-1 bg-[#03C4EB] mx-auto mb-[20px]"></div>
                <p className='text-lg text-[#666666] mb-7 '>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                <div className=" py-12 pb-32 px-12 bg-white">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators -bottom-20">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active" style={{ width: '15px', height: '15px', borderRadius: '50%', backgroundColor: 'gray' }}></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1" style={{ width: '15px', height: '15px', borderRadius: '50%', backgroundColor: 'gray' }}></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2" style={{ width: '15px', height: '15px', borderRadius: '50%', backgroundColor: 'gray' }}></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3" style={{ width: '15px', height: '15px', borderRadius: '50%', backgroundColor: 'gray' }}></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="4" style={{ width: '15px', height: '15px', borderRadius: '50%', backgroundColor: 'gray' }}></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className="flex justify-start items-center gap-3 text-left">
                                    <div className="w-[80px] rounded-full overflow-hidden border-4 border-[text-[#666666]]">
                                        <img src={test1} alt="" />
                                    </div>
                                    <div className="">
                                        <h1 className='font-bold text-[19px]'>Saul Goodman</h1>
                                        <p className='text-[16px] text-[#666666] -mt-1 mb-1.5'>Ceo & Founder</p>
                                        <div className="flex justify-start text-yellow-400">
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <p className='italic text-left text-[17px]'>"Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="flex justify-start items-center gap-3 text-left">
                                    <div className="w-[80px] rounded-full overflow-hidden border-4 border-[text-[#666666]]">
                                        <img src={test2} alt="" />
                                    </div>
                                    <div className="">
                                        <h1 className='font-bold text-[19px]'>Sara Wilsson</h1>
                                        <p className='text-[16px] text-[#666666] -mt-1 mb-1.5'>Designer</p>
                                        <div className="flex justify-start text-yellow-400">
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <p className='italic text-left text-[17px]'>"Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="flex justify-start items-center gap-3 text-left">
                                    <div className="w-[80px] rounded-full overflow-hidden border-4 border-[text-[#666666]]">
                                        <img src={test3} alt="" />
                                    </div>
                                    <div className="">
                                        <h1 className='font-bold text-[19px]'>Jena Karlis</h1>
                                        <p className='text-[16px] text-[#666666] -mt-1 mb-1.5'>Store Owner</p>
                                        <div className="flex justify-start text-yellow-400">
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <p className='italic text-left text-[17px]'>"Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim."</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="flex justify-start items-center gap-3 text-left">
                                    <div className="w-[80px] rounded-full overflow-hidden border-4 border-[text-[#666666]]">
                                        <img src={test4} alt="" />
                                    </div>
                                    <div className="">
                                        <h1 className='font-bold text-[19px]'>Matt Brandon</h1>
                                        <p className='text-[16px] text-[#666666] -mt-1 mb-1.5'>Freelancer</p>
                                        <div className="flex justify-start text-yellow-400">
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <p className='italic text-left text-[17px]'>"Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam."</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="flex justify-start items-center gap-3 text-left">
                                    <div className="w-[80px] rounded-full overflow-hidden border-4 border-[text-[#666666]]">
                                        <img src={test5} alt="" />
                                    </div>
                                    <div className="">
                                        <h1 className='font-bold text-[19px]'>John Larson</h1>
                                        <p className='text-[16px] text-[#666666] -mt-1 mb-1.5'>Enterpreneur</p>
                                        <div className="flex justify-start text-yellow-400">
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <p className='italic text-left text-[17px]'>"Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid."</p>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>



                    {/* <div className="flex justify-start items-center gap-3 text-left">
                        <div className="w-[80px] rounded-full overflow-hidden border-4 border-[text-[#666666]]">
                            <img src={test1} alt="" />
                        </div>
                        <div className="">
                            <h1 className='font-bold text-[19px]'>Saul Goodman</h1>
                            <p className='text-[16px] text-[#666666] -mt-1 mb-1.5'>Ceo & Founder</p>
                            <div className="flex justify-start text-yellow-400">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <p className='italic text-left text-[17px]'>"Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
