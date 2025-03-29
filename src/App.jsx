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

    <div className="min-h-screen overflow-x-hidden">
        <header className="flex justify-between bg-[#222831] items-center px-4 py-4 md:px-8 lg:px-24 border-b-2 border-cyan-900">
            {/* <img src="/Blender Logo.png" alt="Logo" className="h-12 w-auto" />  */}
            <h1 className="text-[#EEEEEE] text-md font-poppins hover:cursor-pointer hover:text-[#bf205a]">Mfoniso</h1>    
          <div className="flex space-x-8 text-[#EEEEEE] text-md font-poppins hover:cursor-pointer">
            <h1 className="hover:text-[#bf205a]">Home</h1>
            <h1 className="hover:text-[#bf205a]">About Me</h1>
            <h1 className="hover:text-[#bf205a]">Contact</h1>
          </div>
        </header>

            <div className="relative bg-[#222831] h-[100%] flex flex-col items-start lg:px-36 md:px-18 lg:py-44 md:py-20">
                        
            {/* herovector */}
            <div className="lg:w-[80%] md:w-[40%] sm:w-[10%] relative">
          <img
            src="/herovector.svg"
            className="lg:w-[10%] md:w-[10%] sm:w-[10%] object-cover absolute py-10 -ml-20 "
            alt="vector"
          />
        </div>
            {/* Hero Info */}
            <h1 className="text-[#FFFFFF] text-3xl md:text-5xl lg:text-[84px] font-extrabold font-poppins mt-20 md:mt-0 lg:mt-0 px-6 md:px-0 lg:px-0"> 
            CREATIVE WEB <span className="-mt-2 md:-mt-18 lg:-mt-4 text-[#bf205a]">DEVELOPER</span>
            </h1>
            <div className="flex mt-10 px-4 md:px-8 lg:px-0 space-x-4">
            <button className='bg-[#bf205a] text-white px-6 md:px-8 lg:px-10 py-2 rounded-3xl font-medium   hover:bg-white hover:text-[#bf205a] '>
              Hire Me
              </button>
              <div>
            <button className='flex bg-[#ffffff] text-[#bf205a] px-8 py-2 md:px-8 lg:px-10 gap-4 md:gap-1 rounded-3xl font-medium ml-12  hover:bg-[#bf205a] hover:text-[#ffffff]'>
              Download CV 
              <img src='/downloadicon.svg' 
              className="w-5 h-6  invert hover:brightness-0"/></button>
              
              </div>
            </div>

            {/* First Background */}
            <div className=" w-full md:w-[40%] lg:w-[80%] flex  items-center justify-center relative mt-5 md:mt-0">
          <img
            src="/doodlesimage.svg"
            className="w-[90%] md:w-[60%] lg:w-[60%]  object-cover md:absolute md:-right-80 md:-bottom-28"
            alt="heropics"
          />
        </div>

            {/* Second Background */}
            <div className="w-full md:w-[60%] flex items-center justify-center relative ">
          <img
            src="/heropics.svg"
            className="w-[60%] md:w-[20%] lg:w-[60%] object-cover md:absolute md:-right-96 md:mb-26 -mt-48 md:-mt-0"
            alt="heropics"
          />
        </div>
            </div>


            {/* SECTION TWO */}

            <div className="relative bg-[#222831] flex flex-col md:flex-row px-4 md:px-8 lg:px-36 py-12 md:py-36">
                        
                        {/* herovector */}
                        {/* <div className="w-[80%] relative">
                      <img
                        src="/herovector.svg"
                        className="w-[10%] object-cover absolute py-10 -ml-20 "
                        alt="vector"
                      />

                    </div> */}

                      {/* Hero Info */}
                      <div className='h-auto w-full md:w-[50%] mb-4 md:mb-0'>
                        <h1 className="text-3xl md:text-5xl lg:text-[60px] text-[#FFFFFF] font-extrabold font-poppins"> 
                        About<span className="text-[#bf205a] ml-4">me</span>
                        </h1>
                        
                        <h3 className="w-full md:w-[80%] text-[#EEEEEEBF] font-poppins">
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
                      <div className="w-full md:w-[50%] relative ">
                      <img
                        src="/doodlesimage2.svg"
                        className="w-full object-cover"
                        alt="heropics"/>
                      </div>
                      {/* Second Background */}
                      <img
                        src="/heropics2.svg"
                        className="w-full md:w-[27%] object-cover z-10 md:absolute md:right-60 md:top-80 -mt-48 md:mt-0"
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
