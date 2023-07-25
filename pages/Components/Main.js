import React from 'react'
import Typewriter from 'typewriter-effect'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillGithub,AiFillHtml5} from 'react-icons/ai'
import {DiCss3,DiReact,DiNodejs} from 'react-icons/di'
import {IoLogoJavascript,IoLogoNodejs} from 'react-icons/io'
import {SiTailwindcss,SiMui,SiFirebase,SiNextdotjs, SiMongodb, SiDocker, SiJenkins, SiAnsible} from 'react-icons/si'
import {BsBootstrap} from 'react-icons/bs'
import {SiExpress} from 'react-icons/si'
import {TbBrandMongodb} from 'react-icons/tb'
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
      <h3 className=' text-2xl py-2 font-semibold text-gray-900  dark:text-white' style={{fontFamily:'Open Sans, sans-serif'}}>Full stack and DevOps.</h3>
       <h4 className='text-xl py-4 text-gray-800 leading-6  dark:text-white'><Typewriter 
          options={{
            autoStart:true,
            loop:true,
            delay:30,
            strings:[
              "Building bridges from frontend to backend, and deploying dreams with DevOps: Full stack developer and DevOps enthusiast.",
              ]
          }}

      ></Typewriter> </h4>
       
    </div>
    <div className=' text-4xl flex justify-center text-gray-600 gap-8  dark:text-white'>
        <a href="https://twitter.com/SamitPrsl" target={'_blank'} className=' transition ease-in-out delay-150 hover:-translate-y-7 hover:scale-100 duration-300'><AiFillTwitterCircle/></a>
        <a href="https://www.linkedin.com/in/samit-bhattacharjee-96b19b260/" target={'_blank'} className=' transition ease-in-out delay-150 hover:-translate-y-7 hover:scale-100 duration-300'><AiFillLinkedin/></a>
        <a href="https://github.com/Samit-prsl" target={'_blank'} className=' transition ease-in-out delay-150 hover:-translate-y-7 hover:scale-100 duration-300'><AiFillGithub/></a>
    </div>
    <div className=' relative w-80 lg:w-96 h-80 mt-20 mx-auto '>
        <Image src={dp} alt='...' className=' transition ease-in-out delay-300  hover:-translate-y-8 hover:scale-100 duration-500 hover:skew-y-6 rounded-tr-[4rem] rounded-bl-[4rem]' />
    </div>
    <div id='About' className='py-5'>
        <h3 className='text-5xl py-2 text-teal-600 font-medium ' style={{fontFamily:'Quicksand, sans-serif'}}>About...</h3>
        <p className=' text-xl py-4 text-gray-800 leading-10  dark:text-white'>Hello, this is Samit Bhattacharjee from Kolkata, West Bengal, a full stack developer with 1+ years of experience in <span className=' text-teal-500'>MERN stack</span> related technologies and having a deep enthusiasm in  <span className=' text-teal-500'>cloud and DevOps engineering.</span> Being a  <span className=' text-teal-500'>MERN </span> developer I have experience in  <span className=' text-teal-500'>React.js, Next.js, TailwindCSS,Bootstrap</span> and many others in frontend development, while I am well versed with <span className=' text-teal-500'>Vanilla JS,Node. js,Express.Js along with MongoDB to add it up to full stack.</span> I know Linux OS, Version control systems like Git,Github  and have intermediate knowledge in Computer Networks. To add into my Devops skills, I am content with the knowledge of various tools like <span className=' text-teal-500'>Docker,Jenkins ( for CI/CD ), web servers like Nginx, Ansible and sufficient knowledge in AWS </span>,
        I have exclusive knowledge in post -production which adds up to successful deployment of any website. I too have knowledge about <span className="text-teal-500">Data structures and Algorithms in C++</span>,which adds up to my problem solving skills.</p>
    </div>
    <div id='Skills' className=' py-5'>
    <h3 className='text-5xl py-2 text-teal-600 font-medium' style={{fontFamily:'Quicksand, sans-serif'}}>Skills...</h3>
    <h2 className=' text-2xl py-2 text-gray-900 font-semibold  dark:text-white' style={{fontFamily:'Open Sans, sans-serif'}}><Typewriter 
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
    <div  className='flex md:justify-between gap-5 text-5xl text-gray-600 py-5  text-center leading-8  dark:text-white' >
        <SiExpress title='Express.Js' className='cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-100 duration-300 '/>
        {/* <BiLogoMongodb title='MongoDB' className='cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-100 duration-300 '/> */}
        <SiMongodb title='MongoDB' className='cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-100 duration-300 '/>
        <SiDocker title='Docker' className='cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-100 duration-300 '/>
        <SiJenkins title='Jenkins' className='cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-100 duration-300 '/>
        <SiAnsible title='MongoDB' className='cursor-pointer  transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-100 duration-300 '/>
    </div>
    </div>
    </div>
  )
}
