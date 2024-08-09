import React from 'react';
import img1 from '../Images/img1.jpg';
import logo from '../Images/logo.png';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function Home() {

  const [text] = useTypewriter({
    words: ['functional websites', 'working mobile apps', 'beautiful graphics'],
    loop: false,
    typeSpeed:80,
    deleteSpeed:50,
    cursorStyle:'|',
  })
  

  return (
    <div id='home' className="h-screen w-screen bg-center bg-[length:100%_100%] bg-fixed " style={{ backgroundImage: `url(${img1})` }}>
      <div className='bg-black/60 w-full h-full flex justify-center items-center px-3'>
        <div className="text-center">
          <h1 className='text-white text-3xl font-serif mb-7 text-center m-auto'><img className='mx-auto' src={logo} alt="Imperial" /></h1>
          <h2 className='text-white text-3xl md:text-4xl font-bold mb-1'>WELCOME TO IMPERIAL STUDIOS</h2>
          <div className='text-white mb-10 text-3xl'>
            <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
              WE CREATE{' '}
              <span style={{ color: '#03C4EB', fontWeight: 'bold' }}>{text}</span>
              <Cursor cursorColor='#03C4EB' />
            </h1>

          </div>
          <div className="text-lg">
            <button className='text-white border-white border-2 bg-[#03C4EB] hover:bg-transparent px-4 py-1.5 rounded mx-2 mb-3 duration-500'>GET STARTED</button>
            <button className='text-white border-white border-2 sm:bg-transparent hover:bg-[#03C4EB] rounded py-1.5 px-4 mx-2 duration-500'>OUR SERVICES</button>
          </div>
        </div>
      </div>
    </div>
  )
}
