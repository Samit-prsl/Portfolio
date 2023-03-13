import React from 'react'
import {useForm} from 'react-hook-form'
import { useState } from 'react'
import Typewriter from 'typewriter-effect'
export default function Contact() {
  const [darkMode,SetdarkMode] = useState(false)
    
  return (
    <div className={darkMode ? "dark" : ''}>
    <div id='Contact' className=' py-5 pb-16'>
      <h3 className='text-4xl py-2 text-teal-600 font-medium' style={{fontFamily:'Quicksand, sans-serif'}}>Contact</h3>
        <h2 className=' text-xl py-2 text-gray-900 font-semibold dark:text-white' style={{fontFamily:'Open Sans, sans-serif'}}><Typewriter 
          options={{
            autoStart:true,
            loop:true,
            delay:30,
            strings:[
              "Don't hesitate in this!",
              
            ]
          }}

      ></Typewriter></h2>
        <div className=' md:flex align-baseline'>
      <div className=' py-3'>
              <form action="https://formspree.io/f/xnqyvyyb" method='POST' className=' max-w-[50rem] gap-5 flex-col'>
              <input type="text" name='username' placeholder='Your Name!'autoComplete='off' required className=' m-3 p-3
              rounded-md bg-gradient-to-br from-teal-100 to-teal-300 placeholder:text-black' />
              <input type="Email" name='Email' placeholder='Your Email!'autoComplete='off' required className=' m-3 p-3  rounded-md bg-gradient-to-br from-teal-100 to-teal-300  placeholder:text-black'/>
              <textarea name="message" id="" cols="28" rows="6" autoComplete='off' placeholder='Write Something!' required className=' m-3 p-3  rounded-md bg-gradient-to-br from-teal-100 to-teal-300  placeholder:text-black' ></textarea>
              <div> <input type="submit" value='Send' title='Click Here to Send' className=' m-5 p-3 bg-gradient-to-r from-cyan-700 to-teal-700 text-white px-4 py-2 rounded-md cursor-pointer' /></div> 
            </form>
           
      </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.11326429906!2d88.36933081432922!3d22.7611775317599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89a52293de287%3A0x233f012f06af690e!2sBarrackpore%20Station%20Rd%2C%20Barrackpore%2C%20West%20Bengal%20700120!5e0!3m2!1sen!2sin!4v1678165997905!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className=' py-5 rounded-md shadow-md shadow-gray-500 p-4'></iframe>
      </div>
    </div>
 </div> )
}
