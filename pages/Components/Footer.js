import Link from 'next/link'
import React from 'react'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
export default function Footer() {
  return (
    <div> 
    <div className=' md:flex justify-between bg-gradient-to-br from-white to-teal-300 py-5 '>
      <div className=' text-center p-5'>
        <h2 className=' text-2xl font-extrabold 'style={{fontFamily:'Quicksand, sans-serif'}}>Samit Bhattacharjee</h2>
        <h3 className=' text-xl font-semibold mr-2' style={{fontFamily:'Kanit,sans-serif'}}><span className=' '>&copy;</span>DevelopedByMe</h3>
      </div>
      <div className='text-xl font-semibold p-5 text-center' style={{fontFamily:'Quicksand, sans-serif'}}>
        "Nothing more , just trust the process"
      </div>
      <div className=' md:flex-col py-5 ml-3 text-center'>
        <Link href="/" className=' text-xl p-2'>Home</Link>
        <Link href="/#About" className=' text-xl p-2'>About</Link>
        <Link href="/#Skills" className=' text-xl p-2'>Skills</Link>
        <Link href="/#Projects" className=' text-xl p-2'>Projects</Link>
        <Link href="/#Contact" className=' text-xl p-2'>Contact</Link>
      </div>
      <div className=' p-5 text-5xl flex justify-center text-gray-700 gap-8 text-center'>
        <a href="https://twitter.com/SamitPrsl" target={'_blank'}><AiFillTwitterCircle/></a>
        <a href="https://www.linkedin.com/in/samit-bhattacharjee-96b19b260/" target={'_blank'}><AiFillLinkedin/></a>
        <a href="https://github.com/Samit-prsl" target={'_blank'}><AiFillGithub/></a>

      </div>
    </div>
 </div> )
}
