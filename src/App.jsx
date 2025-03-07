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

            <div className="bg-[#222831] h-[100vh]">
              hero
            </div>
    </div>
  )
}

export default App
