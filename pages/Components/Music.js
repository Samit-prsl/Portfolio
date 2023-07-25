import React,{useState} from 'react'
import Typewriter from 'typewriter-effect'
export default function Music() {
    const [darkMode,SetdarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ''} style={{paddingBottom:'10px'}}>
         <div id='Projects' className='py-5'>
        <h3 className='text-5xl py-2 text-teal-600 font-medium' style={{fontFamily:'Quicksand, sans-serif'}}>Music...?</h3>
        <h2 className=' text-2xl py-2 text-gray-900 font-semibold dark:text-white' style={{fontFamily:'Open Sans, sans-serif'}}><Typewriter 
          options={{
            autoStart:true,
            loop:true,
            delay:30,
            strings:[
              "Listen up while you scroll!"  
            ]
          }}
        ></Typewriter></h2>
        </div>
        <div style={{ left: 0, width: "100%", height: 352, position: "relative" }}>
  <iframe
    src="https://open.spotify.com/embed/playlist/2ilLU2ZH5OgRnYCIYW4Um7?utm_source=oembed"
    style={{
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      position: "absolute",
      border: 0
    }}
    allowFullScreen=""
    allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture;"
    className=' rounded-tl-[4rem] rounded-br-[4rem]'
  />
</div>
    </div>
  )
}
