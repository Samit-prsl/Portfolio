import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Main from './Components/Main'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { useState } from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {MdOutlineLightMode} from 'react-icons/md'
import Music from './Components/Music'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode,SetdarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ''}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZhdmljb24lMjBmb3IlMjBwb3J0Zm9saW98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@1,300&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300&display=swap" rel="stylesheet"/>
        </Head>
       <main className='bg-white px-10 min-h-screen dark:bg-gray-800 '>
        <section className='bg-white dark:bg-gray-800 dark:text-white'>
        <div className=' py-10 mb-12 flex justify-between'>
            <h1 className=' text-2xl  font-bold' style={{fontFamily:'Kanit,sans-serif'}}><a href='/'>DevelopedByMe</a></h1>
            <ul className=' flex items-center'>
                <li>
                  { darkMode ? (
                    <MdOutlineLightMode onClick={()=>{
                      SetdarkMode(!darkMode)
                    }} title='Dark Mode' className=' cursor-pointer text-2xl ml-4'/>
                  ):(<BsFillMoonStarsFill onClick={()=>{
                    SetdarkMode(!darkMode)
                  }} title='Dark Mode' className=' cursor-pointer text-2xl ml-4'/>)}
                </li>
                <li><a title='Click to download Resume' className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-4'  href="resume-1.pdf" download='Samitresume.pdf'>Resume</a></li>
            </ul>
        </div>
      </section> 
      <Main className=' dark:text-white'/>
        <Music/>
        <Projects/>
        <Contact/>
      </main>
       <div className={darkMode ? "dark" : ''}>
       <Footer/>
       </div>
       </div>
  )
}
