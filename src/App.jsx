import React from 'react'
import Img from "./assets/illustration-article.svg"
import Avatar from './assets/image-avatar.webp'
const App = () => {
  return (
    <div className='bg-amber-300 h-screen w-screen flex items-center justify-center'>
      <div className='border-black w-3/4 border-1 border-r-4 border-b-4 bg-white rounded-xl p-4 md:w-1/4 mx-auto'>
        <img src={Img} alt="illustration" className='mb-7' />
        <span className='font-bold bg-amber-300 p-2 rounded mt-5'>Learning</span>
        <p className='my-4 font-semibold'>Published 21 Dec 2023</p>
        <h1 className='text-2xl font-bold mb-2'>HTML and CSS foundations</h1>
        <p className='text-gray-400 font-serif mb-5 font-bold' style={{ fontFamily: "Figtree" }}>These languages are backbone of every website, defining structure, content, and presentation</p>
        <div className='flex'>
          <img src={Avatar} alt="avatar" className='w-9 h-9'/>
          <p className='font-bold ml-3'>Greg Hooper</p>
        </div>
      </div>

    </div>
  )
}

export default App


