import React,{useRef} from 'react'
import Block from './Block'
import { Link } from 'react-router-dom'
import ParticlesComponent from '../Particle/particle';

const Reverse = () => {
  const containerRef = useRef(null);
  return (
  //   <div
  //   ref={containerRef}
  //   className="h-screen w-screen bg-black text-white flex justify-center items-center relative"
  // >
   
    

    <div className="h-[100%] w-[100%] flex-col items-center justify-center">
    {/* <Link to="/"> */}
      <div className="m-12 p-2 h-[10%] items-center flex justify-center">
       
      <Block props="Reverse" containerRef={containerRef} navigateTo="/" />
      
      </div>
     
     
    
     
    </div>
  // </div>
  )
}

export default Reverse