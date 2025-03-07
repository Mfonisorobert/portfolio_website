// import { useState } from 'react'
import React from "react";

// function App() {
//   const [count, setCount] = useState(0)
  const App = () => {
  return (

    <div className="">
        <header className="flex justify-between bg-[#222831] items-center px-24 py-4 border-b-2 border-cyan-900">
            <img src="/Blender Logo.png" alt="Logo" className="h-12 w-auto" />     
          <div className="flex space-x-8 text-[#EEEEEE] text-md font-poppins hover:cursor-pointer">
            <h1 className="hover:text-blue-500">Home</h1>
            <h1 className="hover:text-blue-500">About Me</h1>
            <h1 className="hover:text-blue-500">Contact</h1>
          </div>
        </header>

            <div className="relative bg-[#222831] h-[100vh] flex flex-col items-start px-36 py-44">
            {/* justify-center */}
            
            {/* herovector */}
            <div className="w-[80%] relative">
          <img
            src="/herovector.svg"
            className="w-[10%] object-cover absolute py-10 -ml-20 "
            alt="vector"
          />
        </div>
            
            <h1 className="text-[84px] text-[#FFFFFF] font-extrabold font-poppins"> 
            CREATIVE WEB <p className="-mt-10 text-[#bf205a]">DEVELOPER</p>
            </h1>
            <div className="flex">
            <button className='bg-[#bf205a] text-white px-10 py-2 rounded-3xl font-medium ml-2 hover:bg-white hover:text-[#bf205a]'>
              Hire Me
              </button>
              <div>
            <button className='bg-[#ffffff] text-[#bf205a] px-8 py-2  gap-4 rounded-3xl flex font-medium ml-12  hover:bg-[#bf205a] hover:text-[#ffffff]'>
              Download CV 
              <img src='/downloadicon.svg' 
              className="w-5 h-6  invert hover:brightness-0"/></button>
              
              </div>
            </div>

            {/* First Background */}
            <div className="w-[80%] flex items-center justify-center relative">
          <img
            src="/doodlesimage.svg"
            className="w-[60%]   object-cover absolute -right-80 -bottom-28"
            alt="heropics"
          />
        </div>

            {/* Second Background */}
            <div className="w-[60%] flex items-center justify-center relative">
          <img
            src="/heropics.svg"
            className="w-[60%]   object-cover absolute -right-96 -mb-20"
            alt="heropics"
          />
        </div>
            </div>
            
            
    </div>
  )
}

export default App
