// import React from 'react'
import React, { useRef } from 'react';
import Block from '../Reusable/Block';
import { BrowserRouter, Routes, Route, MemoryRouter } from "react-router-dom";
import ParticlesComponent from '../Particle/particle';
import '../../App.css'
const Start = ({props}) => {
  const containerRef = useRef(null);
  return (
    // <MemoryRouter>
    <div ref={containerRef} className='h-screen w-screen bg-black text-white flex justify-center items-center relative'>
    <div className='h-[100%]'>
    <ParticlesComponent> 
     </ParticlesComponent>
    </div>
      
      <div className='h-[100%] w-[100%] flex-col items-center justify-center'>
      
    <div className='m-12 p-2 h-[10%] items-center flex justify-center'><Block props='C++' containerRef={containerRef} /></div>  
    <div className='m-12 p-2 h-[10%] items-center flex justify-center'><Block props='JAVA' containerRef={containerRef} /></div> 
    <div className='m-12 p-2 h-[10%] items-center flex justify-center'><Block props='PYTHON' containerRef={containerRef} /></div> 
     </div>
   
   </div>

    
   
  )
}

export default Start