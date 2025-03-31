import { useState } from 'react'
import React from "react";
import { Menu, X } from 'lucide-react'; // For icons


// function App() {
//   const [count, setCount] = useState(0)
  const App = () => {
    const [isExpanded, setIsExpanded] = useState(false); // For Text

    const [menuOpen, setMenuOpen] = useState(false); // for Harmburger

    const toggleText = () => {
      setIsExpanded(!isExpanded); // For Text
    };

    const toggleMenu = () => {
      setMenuOpen(!menuOpen); // For Harmburger
    };

  return (

    <div className="min-h-screen overflow-x-hidden">
        <header className="flex fixed top-0 w-full z-50 justify-between bg-[#222831] items-center px-4 py-4 md:px-8 lg:px-24 border-b-2 border-cyan-900">
            {/* <img src="/Blender Logo.png" alt="Logo" className="h-12 w-auto" />  */}
            <h1 className="text-[#EEEEEE] text-md font-poppins hover:cursor-pointer hover:text-[#00ADB5]">Mfoniso Robert</h1>    
          <nav className="hidden md:flex space-x-8 text-[#EEEEEE] text-md font-poppins hover:cursor-pointer">
            <h1 className="hover:text-[#00ADB5]">Home</h1>
            <h1 className="hover:text-[#00ADB5]">About Me</h1>
            <h1 className="hover:text-[#00ADB5]">Contact</h1>
            </nav>

            {/* Hamburger Menu Icon (Visible on small screens) */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Mobile Navigation Menu (Only visible when menuOpen is true) */}
        {menuOpen && (
          <nav className="absolute top-full left-0 w-full bg-[#222831] text-white flex flex-col items-center py-4 space-y-4 shadow-lg md:hidden">
            <h1 className="hover:text-[#00ADB5] cursor-pointer">Home</h1>
            <h1 className="hover:text-[#00ADB5] cursor-pointer">About Me</h1>
            <h1 className="hover:text-[#00ADB5] cursor-pointer">Contact</h1>
          </nav>  
        )}

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
            <h1 className="text-[#FFFFFF] text-5xl md:text-9xl lg:text-[84px] font-extrabold font-poppins mt-32 md:mt-0 lg:mt-0 px-6 md:px-0 lg:px-0"> 
            CREATIVE WEB <span className="-mt-2 md:-mt-18 lg:-mt-4 text-[#00ADB5]">DEVELOPER</span>
            </h1>
            <div className="flex mt-10 px-4 md:px-8 lg:px-0 -space-x-10 md:space-x-10">
            <button className='bg-[#00ADB5] text-white px-6 md:px-8 lg:px-10 py-2 rounded-3xl font-medium   hover:bg-white hover:text-[#00ADB5] '>
              Hire Me
              </button>
              <div>
            <button className='flex bg-[#ffffff] text-[#00ADB5] px-8 py-2 md:px-8 lg:px-10 gap-4 rounded-3xl font-medium ml-12  hover:bg-[#00ADB5] hover:text-[#ffffff]'>
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
             
                      {/* Hero Info */}
                      <div className='h-auto w-full md:w-[50%] mb-4 md:mb-0'>
                        <h1 className="text-3xl md:text-5xl lg:text-[60px] text-[#FFFFFF] font-extrabold font-poppins"> 
                        About<span className="text-[#00ADB5] ml-4">me</span>
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
        className=" text-[#ffffff] font-semibold hover:underline focus:outline-none hover:text-[#00ADB5]">
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
                        className="w-full md:w-[27%] object-cover z-10 md:absolute 
                        md:right-60 md:top-80 -mt-48 md:mt-0"
                        alt="heropics"
                      />
                      </div>                                     


               {/* SECTION THREE */}
<div className='bg-[#222831] px-4 py-8 md:py-2 min-h-screen relative'>
    {/* Background Image */}
    <img
        src="/doodle items.svg"
        className='object-cover absolute w-full h-full top-0 left-0 opacity-20'
    />

    {/* Section Title */}
    <div className='absolute top-10 md:top-20 w-full text-center'>
        <h1 className='text-3xl md:text-5xl lg:text-[60px] text-[#FFFFFF] font-extrabold font-poppins'>
            My recent <span className='text-[#00ADB5]'>works</span>
        </h1>
    </div>

    {/* Buttons */}
    <div className='flex flex-wrap justify-center mt-32 md:mt-48 gap-2 md:gap-6 font-mono'>
        <button className='bg-[#00ADB5] px-3 py-1 md:px-4 md:py-2 rounded-3xl text-sm md:text-lg whitespace-nowrap'>
            All
        </button>
        <button className='bg-[#ffffff] px-3 py-1 md:px-4 md:py-2 rounded-3xl text-sm md:text-lg whitespace-nowrap'>
            UI/UX
        </button>
        <button className='bg-[#ffffff] px-3 py-1 md:px-4 md:py-2 rounded-3xl text-sm md:text-lg whitespace-nowrap'>
            Graphic Design
        </button>
        <button className='bg-[#ffffff] px-3 py-1 md:px-4 md:py-2 rounded-3xl text-sm md:text-lg whitespace-nowrap'>
            Web Dev
        </button>
        <button className='bg-[#ffffff] px-3 py-1 md:px-4 md:py-2 rounded-3xl text-sm md:text-lg whitespace-nowrap'>
            Video Editing
        </button>
    </div>

    {/* Square Shapes */}
    <div className='flex flex-col md:flex-row gap-4 md:gap-8 mt-10 md:mt-20 items-center justify-center'>
        <img src="/UIUXFrame.svg" className='w-36 h-36 md:w-72 md:h-72' />
        <img src="/LaptopFrame 11.svg" className='w-36 h-36 md:w-72 md:h-72' />
        <img src="/PhonesFrame 10.svg" className='w-36 h-36 md:w-72 md:h-72' />
    </div>
</div>

            

    </div>
  )
}

export default App
