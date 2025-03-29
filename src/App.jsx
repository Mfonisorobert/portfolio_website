import { useState } from 'react'
import React from "react";

// function App() {
//   const [count, setCount] = useState(0)
  const App = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => {
      setIsExpanded(!isExpanded);
    };

  return (

    <div className="">
        <header className="flex justify-between bg-[#222831] items-center sm:px-4 py-4 md:px-8 lg:px-24 border-b-2 border-cyan-900">
            <img src="/Blender Logo.png" alt="Logo" className="h-12 w-auto" />     
          <div className="flex space-x-8 text-[#EEEEEE] text-md font-poppins hover:cursor-pointer">
            <h1 className="hover:text-[#bf205a]">Home</h1>
            <h1 className="hover:text-[#bf205a]">About Me</h1>
            <h1 className="hover:text-[#bf205a]">Contact</h1>
          </div>
        </header>

            <div className="relative bg-[#222831] h-[100vh] flex flex-col items-start px-36 py-44">
                        
            {/* herovector */}
            <div className="w-[80%] relative">
          <img
            src="/herovector.svg"
            className="w-[10%] object-cover absolute py-10 -ml-20 "
            alt="vector"
          />
        </div>
            {/* Hero Info */}
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


            {/* SECTION TWO */}

            <div className="relative bg-[#222831] h-[100vh] flex px-36 py-36">
                        
                        {/* herovector */}
                        {/* <div className="w-[80%] relative">
                      <img
                        src="/herovector.svg"
                        className="w-[10%] object-cover absolute py-10 -ml-20 "
                        alt="vector"
                      />

                    </div> */}

                      {/* Hero Info */}
                      <div className='h-auto w-[50%]'>
                        <h1 className="flex text-[60px] text-[#FFFFFF] gap-6 font-extrabold font-poppins"> 
                        About<h3 className="text-[#bf205a]">me</h3>
                        </h1>
                        
                        <h3 className="w-[80%] text-[#EEEEEEBF] font-poppins">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                        per inceptos himenaeos. Curabitur tempus urna at turpis condimentum 
                        lobortis {" "}
          {!isExpanded && (
                <span className="text-[#EEEEEEBF]">... </span>
                  )}
               {isExpanded && (
          <span>
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                        per inceptos himenaeos. Curabitur tempus urna at turpis condimentum 
                        lobortis. Nulla facilisi. Praesent imperdiet tortor id orci hendrerit 
                        fermentum.
                          </span>
                        )}
                        </h3>

                        <button
        onClick={toggleText}
        className=" text-[#ffffff] font-semibold hover:underline focus:outline-none hover:text-[#bf205a]">
        {isExpanded ? "Read Less" : "Read More"}
      </button>
              
            </div>
                        
                      {/* First Background */}
                      <div className="w-[60%] relative ">
                      <img
                        src="/doodlesimage2.svg"
                        className="w-[100%] object-cover relative "
                        alt="heropics"/>
                      </div>
                      {/* Second Background */}
                      <img
                        src="/heropics2.svg"
                        className="w-[27%]   object-cover absolute right-60 top-80"
                        alt="heropics"
                      />
                      </div> 

               
               {/* SECTION THREE */}  
               <div className='bg-[#222831] absolute'>
                <img src="/doodle items.svg"
                className='w-[100%]'
                />
                <div className='relative bg-red'>
                  <h1>My recent works</h1>
                </div>
                </div>     
            
    </div>
  )
}

export default App
