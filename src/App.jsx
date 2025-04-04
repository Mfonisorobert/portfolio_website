import { useState } from 'react'
import React from "react";
import { Menu, X } from 'lucide-react'; // For icons
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

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
               
               <div className='bg-[#222831] relative px-4 py-8 md:py-2 min-h-screen'>
                
               {/*  Background Image */}
                <img src="/doodle items.svg"
                className='object-cover absolute w-full h-full top-0 right-0 left-0'
                />

                {/* Section Title */} 
                <div className='relative flex top-6 md:top-0 w-full items-center text-[#FFFFFF]  
                mt-4 md:ml-36 md:mt-28 
                '>                
               <h1 className='text-3xl md:text-8xl lg:text-[70px] text-[#FFFFFF] font-extrabold font-poppins '>
                My recent <span className='text-[#00ADB5]'>works</span></h1>
                </div>


                {/* Buttons */}
                <div className='relative flex flex-wrap top-0 mt-14 md:mt-10 md:px-36 md:gap-6 font-mono gap-2 justify-start md:justify-start'>
                <button className='bg-[#00ADB5] px-3 py-1 text-sm md:px-4 md:py-2 rounded-3xl md:text-lg '>
                  All</button>
                <button className='bg-[#ffffff] px-3 py-1 text-sm md:px-4 md:py-2 rounded-3xl md:text-lg'>
                  UI/UX</button>
                <button className='bg-[#ffffff] px-3 py-1 text-sm md:px-4 md:py-2 rounded-3xl md:text-lg'>
                  Graphic Design</button>
                <button className='bg-[#ffffff] px-3 py-1 text-sm md:px-4 md:py-2 rounded-3xl md:text-lg'>
                  Web Dev</button>
                <button className='bg-[#ffffff] px-2 py-1 text-sm md:px-4 md:py-2 rounded-3xl md:text-lg'>
                  Video Editing</button>    
              </div>


                {/* Square shapes */}
                <div className='flex relative flex-col md:flex-row lg:flex-row gap-1 md:gap-8 justify-center mt-4 md:mt-8'>
                <img src="/UIUXFrame.svg" className='w-96 h-96 md:w-72 md:h-72'/>
                <img src="/LaptopFrame 11.svg" className='w-96 h-96 md:w-72 md:h-72'/>
                <img src="/PhonesFrame 10.svg" className='w-96 h-96 md:w-72 md:h-72'/>
                </div>
            </div>     

        
{/* SECTION FOUR */}
<div className='bg-[#222831] flex flex-col md:flex-row'>
<div>
    <h1 className='text-3xl md:text-5xl md:text-[60px] text-[#FFFFFF] md:w-[75%] w-[100%] text-center md:text-left md:ml-24 mt-32 font-extrabold font-poppins'>
    Got a project in <span className='text-[#00ADB5]'>mind?</span></h1>
    <img src='/steps.svg' className='md:ml-72 items-center justify-center ml-20'>
    </img>
</div>


{/* Forms section */}
<div className="min-h-screen items-center justify-center p-4 md:mr-24 mt-20 md:mt-32">
      <form className="bg-[#393E4680] p-6 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4 text-[#ffffff]">Contact Me</h2>
        {/* <h4 className='text-[#ffffff]'>Your Name</h4> */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-[#393E4680] w-full md:w-1/2 p-3 border rounded-lg focus:outline-none text-[#ffffff]  focus:ring-[#00ADB5]"
          />
            <input
            type="email"
            placeholder="Your Email"
            className="bg-[#393E4680] w-full md:w-1/2 p-3 border rounded-lg focus:outline-none text-[#ffffff] focus:ring-[#00ADB5]"
          />
        </div>
        {/* <h4 className='text-[#ffffff]'>Your Message</h4> */}
        <textarea
          placeholder="Your Message"
          className="bg-[#393E4680] w-full p-3 border rounded-lg mb-4 focus:outline-none text-[#ffffff] focus:ring-[#00ADB5]"
          rows="5"
        ></textarea>
        <button type="submit" className="bg-[#00ADB5] text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>

</div>


{/* FOOTER SECTION */}
<footer className=' h-full bg-[#222831] py-4 '>
  <div className='py-24'>
  <div className='flex justify-center gap-16 font-poppins text-[#ffffff]'>
    <h1>Home</h1>
    <h1>About Me</h1>
    <h1>Contact</h1>
  </div>

{/* Social Media Icons */}
{/* npm install react-icons */}
<div className="flex  justify-center text-[#ffffff] mt-10 gap-8">
          <a href="#" className=" hover:text-blue-400"><FaFacebookF size={18} /></a>
          <a href="#" className=" hover:text-pink-400"><FaInstagram size={18} /></a>
          <a href="#" className=" hover:text-blue-500"><FaLinkedinIn size={18} /></a>
          <a href="#" className=" hover:text-blue-300"><FaTwitter size={18} /></a>
          <a href="#" className=" hover:text-red-500"><FaYoutube size={18} /></a>
          </div>
        </div>
        <div className='flex justify-center items-center'>
        <h1 className='text-[#939EA4] text-sm font-mono '>©2025 Mfoniso Robert</h1>
        </div>
</footer>
    </div>
  )
}

export default App
