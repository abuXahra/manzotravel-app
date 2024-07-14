import React from 'react'

export default function HeroSection() {
  return (
    <div className="bg-cover  md:h-full md:min-h-screen md:w-full h-[600px] flex justify-center items-center" style={{backgroundImage: `url('/images/travelunsplash.jpg')`}}>
        <div className="bg-slate-950/40 align-middle h-full min-h-screen w-full flex flex-col justify-center items-center">
            <h1 className='md:text-6xl lg:text-8xl font-bold sm: text-5xl'>Want to Travel?</h1>
            <h2 className='md:text-4xl text-2xl font-semibold'>Book your flight and hotel Here...</h2>
        </div>
    </div>
  )
}
