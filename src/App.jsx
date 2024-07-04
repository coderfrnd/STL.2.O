import React, { useRef } from 'react';
import Block from './Component/Reusable/Block';
import ParticlesComponent from './Component/Particle/particle';

import './App.css'
import Start from './Component/Extra/start';

const App = () => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className='h-screen w-screen bg-black text-white flex justify-center items-center relative'>
     <div className='h-[100%]'>
     <ParticlesComponent> 
      </ParticlesComponent>
     </div>
       <Start props={containerRef}/>
    
    </div>
  );
}

export default App;
