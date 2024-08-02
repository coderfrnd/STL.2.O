import React, { useRef } from 'react';
import ParticlesComponent from '../../Component/Particle/particle';
import Reverse from '../../Component/Reusable/Reverse';
import Block from '../../Component/Reusable/Block';

function CppFront() {
  const containerRef = useRef(null);
  return (
    <div ref={containerRef} className="h-screen w-screen bg-black text-white  relative">
      <ParticlesComponent />
      {/* <div className='h-screen w-screen'> */}
      <div className='h-[20%]  flex items-center '>
      <div className="  mb-2 h-[100%] w-[50%] flex justify-center items-center">
        <Block props="Back"  navigateTo="/cpp" />
        {/* <Block props="Home Page"  navigateTo="/" /> */}
      </div>
      <div className=" mb-2  h-[100%] w-[50%] flex justify-center items-center">
        <Block props="Home Page"  navigateTo="/" />
        {/* <Block props="Home Page"  navigateTo="/" /> */}
      </div>
      </div>
      
      <div className='flex flex-wrap justify-center h-[70%] w-screen items-center'>
      <div className="  mb-2 h-[100%] w-[50%] flex justify-center items-center">
        <Block props="Map"  navigateTo="/map" />
        {/* <Block props="Home Page"  navigateTo="/" /> */}
      </div>
      {/* <Block props='Map' containerRef={containerRef} navigateTo='/map' />
      <Block props='Vector' containerRef={containerRef} navigateTo='/vector' /> */}
      <div className="  mb-2 h-[100%] w-[50%] flex justify-center items-center">
        <Block props="Vector"  navigateTo="/map" />
        {/* <Block props="Home Page"  navigateTo="/" /> */}
      </div>
      </div>
      {/* </div> */}
   
      
      {/* Add more blocks for other STL components */}
    </div>
  );
}

export default CppFront;
