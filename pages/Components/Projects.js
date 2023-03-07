import React from 'react'
import Image from 'next/image'
import pic12 from '/public/pic12.png'
import pic2 from '/public/pic2.png'
import pic3 from '/public/pic3.png'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import { useState } from 'react'
export default function Projects() {
  const [darkMode,SetdarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ''}>
      <div id='Projects' className='py-5'>
        <h3 className='text-4xl py-2 text-teal-600 font-medium' style={{fontFamily:'Quicksand, sans-serif'}}>My Projects</h3>
        <h2 className=' text-xl py-2 text-gray-900 font-semibold dark:text-white' style={{fontFamily:'Open Sans, sans-serif'}}><Typewriter 
          options={{
            autoStart:true,
            loop:true,
            delay:30,
            strings:[
              "What I've Cooked.",
              
            ]
          }}

      ></Typewriter></h2>
        <div className=" grid md:grid-cols-2 gap-8 mx-auto py-5">
            <div className=' relative flex items-center justify-center h-[100%] w-full shadow-md shadow-gray-400 rounded-xl group  p-4 hover:bg-gradient-to-r from from-white to-teal-600 mx-auto'>
                <Image className=' rounded-xl group-hover:opacity-10 mx-auto' src={pic12} alt='...'/>
                <div className=' hidden group-hover:block absolute text-center'>
                    <h3 className=' text-2xl font-semibold' style={{fontFamily:'Quicksand, sans-serif'}}>The News App</h3>
                    <p className=' text-xl font-semibold' style={{fontFamily:'Quicksand, sans-serif'}}>Using React.Js , Bootstrap and NewsAPI</p>
                    <button className=' text-white bg-blue-600 rounded-md p-3 mt-5'><Link href='https://newzbuzzby-samit.netlify.app/' target={'_blank'}>More Info</Link></button>
                </div>
            </div>
            <div className=' relative flex items-center justify-center h-auto w-full shadow-md shadow-gray-400 rounded-xl group  p-4 hover:bg-gradient-to-r from from-white to-teal-600 mx-auto'>
                <Image className=' rounded-xl group-hover:opacity-10 mx-auto' src={pic2} alt='...'/>
                <div className=' hidden group-hover:block absolute text-center'>
                    <h3 className=' text-2xl font-semibold' style={{fontFamily:'Quicksand, sans-serif'}}>The Weather App</h3>
                    <p className=' text-xl font-semibold' style={{fontFamily:'Quicksand, sans-serif'}}>Using Next.Js , TailwindCSS and WeatherAPI</p>
                    <button className=' text-white bg-blue-600 rounded-md p-3 mt-5'><Link href='https://quick-weather-peach.vercel.app/' target={'_blank'}>More Info</Link></button>
                </div>
                </div>
                </div>
                </div>
                </div>
  )
}
