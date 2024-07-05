import React,{ useRef }  from 'react'
import ParticlesComponent from '../../Component/Particle/particle'
import Reverse from '../../Component/Reusable/Reverse'
import { Link } from 'react-router-dom'
import Block from '../../Component/Reusable/Block';
import Map from './Map'


function CppFront() {
  const containerRef = useRef(null);
  return (
   
  <>

  <div  ref={containerRef}
    className="h-screen w-screen bg-black text-white flex justify-center items-center relative">
      <ParticlesComponent></ParticlesComponent>
      <Reverse/>
      
       <Block props='Map' containerRef={containerRef} navigateTo='/map'/>
      
    </div>

  </>
  )
}

export default CppFront