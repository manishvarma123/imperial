import React from 'react';
import subscribe from '../Images/subscribe.jpg';

export default function Subscribe() {
    return (
        <div id='subscribe' className='w-screen bg-fixed bg-center bg-cover' style={{ backgroundImage: `url(${subscribe})` }}>
            <div className="w-full bg-black/50 py-24">
                <div className="px-3 max-w-[1320px] m-auto  text-center md:flex justify-start items-center gap-10">
                    <div className="md:w-3/4 text-start text-white">
                        <h1 className=' text-[28px] font-bold mb-3'>Subscribe For Updates</h1>
                        <p className='text-[17px] mb-6'>Join our 1000+ subscribers and get access to the latest tools, freebies, product announcements and much more!</p>
                    </div>
                    <div className="md:w-1/4">
                        <h1 className='inline-block text-white border-2 border-[white] px-8 py-2 font-bold'>SUBSCRIBE NOW</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
