import React from 'react'
import Typewriter from 'typewriter-effect'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillGithub,AiFillHtml5} from 'react-icons/ai'
import {DiCss3,DiReact,DiNodejs} from 'react-icons/di'
import {IoLogoJavascript,IoLogoNodejs} from 'react-icons/io'
import {SiTailwindcss,SiMui,SiFirebase,SiNextdotjs} from 'react-icons/si'
import {BsBootstrap} from 'react-icons/bs'
import Image from 'next/image'
import dp from '/public/dp.png'
import { useState,useEffect } from 'react'
export default function Main() {
  const [darkMode,SetdarkMode] = useState(false);
  const [text, setText] = useState('');
  return (
    <div className={darkMode ? "dark" : ''}>
    <div id='Home' className=' text-center p-10 dark:text-white' >
      <h1 className=' text-4xl py-2 text-teal-600 font-medium ' style={{fontFamily:'Quicksand, sans-serif'}}>Samit Bhattacharjee</h1>
      <h3 className=' text-2xl py-2 font-semibold text-gray-900  dark:text-white' style={{fontFamily:'Open Sans, sans-serif'}}>Developer and Designer</h3>
       <h4 className='text-xl py-4 text-gray-800 leading-6  dark:text-white'><Typewriter 
          options={{
            autoStart:true,
            loop:true,
            delay:30,
            strings:[
              "Bringing your vision to life , pixel by pixel - I'm the frontend developer, your website's fixer!",
              
            ]
          }}

      ></Typewriter> </h4>
       
    </div>
    <div className=' text-5xl flex justify-center text-gray-600 gap-8  dark:text-white'>
        <a href="https://twitter.com/SamitPrsl" target={'_blank'} className=' transition ease-in-out delay-150 hover:-translate-y-7 hover:scale-100 duration-300'><AiFillTwitterCircle/></a>
        <a href="https://www.linkedin.com/in/samit-bhattacharjee-96b19b260/" target={'_blank'} className=' transition ease-in-out delay-150 hover:-translate-y-7 hover:scale-100 duration-300'><AiFillLinkedin/></a>
        <a href="https://github.com/Samit-prsl" target={'_blank'} className=' transition ease-in-out delay-150 hover:-translate-y-7 hover:scale-100 duration-300'><AiFillGithub/></a>
    </div>
    <div className=' relative w-80 h-80 mt-20 mx-auto '>
        <Image src={dp} alt='...' className=' transition ease-in-out delay-300  hover:-translate-y-8 hover:scale-100 duration-500 hover:skew-y-6' />
    </div>
    <div id='About' className='py-5'>
        <h3 className='text-4xl py-2 text-teal-600 font-medium ' style={{fontFamily:'Quicksand, sans-serif'}}>About</h3>
        <p className=' text-xl py-4 text-gray-800 leading-10  dark:text-white'>An Enthusiast , sophomore exploring <span className=' text-teal-500'>frontend development</span>  and <span className=' text-teal-500'>designing stuffs</span>.   <span className=' text-teal-500'>Freelancing</span> , providing sercives for <span className=' text-teal-500'>programming</span> and <span className=' text-teal-500'>design content needs</span> , Crafting stunning designs with <span className=' text-teal-500'>pixel-perfect precision</span>,
        I am at your service with code as my ammunition . Join me down and let's get cracking!   </p>
    </div>
    <div id='Skills' className=' py-5'>
    <h3 className='text-4xl py-2 text-teal-600 font-medium' style={{fontFamily:'Quicksand, sans-serif'}}>Skills</h3>
    <h2 className=' text-xl py-2 text-gray-900 font-semibold  dark:text-white' style={{fontFamily:'Open Sans, sans-serif'}}><Typewriter 
          options={{
            autoStart:true,
            loop:true,
            delay:30,
            strings:[
              "Trust me , it wasn't a slow process!",
              
            ]
          }}

      ></Typewriter></h2>
    <div className='flex md:justify-between text-5xl text-gray-600 py-5 gap-5 text-center leading-10  dark:text-white'>
      
        <AiFillHtml5 title='HTML' className='cursor-pointer transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-100 duration-300'/>     
        <DiCss3 title='CSS' className='cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-100 duration-300'/>
        <IoLogoJavascript title='JavaScript' className='cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-100 duration-300'/>
        <DiReact title='React.Js' className='cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-100 duration-300'/>
        <SiTailwindcss title='TailwindCSS' className='cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-100 duration-300'/>
     </div>
    <div  className='flex md:justify-between gap-5 text-5xl text-gray-600 py-5  text-center leading-8  dark:text-white' >
        <BsBootstrap title='Bootstrap' className='cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-100 duration-300 '/>
        <SiMui title='MaterialUI' className='cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-100 duration-300'/>
        <SiFirebase title='Firebase' className='cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-100 duration-300'/>
        <IoLogoNodejs title='Node.Js' className='cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-100 duration-300'/>
        <SiNextdotjs title='Next.Js ' className='cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-100 duration-300'/>
    </div>
    </div>
    </div>
  )
}
