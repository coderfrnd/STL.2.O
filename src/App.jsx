import React, { useRef } from 'react';
import Block from './Component/Reusable/Block';
import ParticlesComponent from './Component/Particle/particle';
// import ParticlesComponent from './Component/Particle/particle';
import './App.css'

const App = () => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className='h-screen w-screen bg-black text-white flex justify-center items-center relative'>
      {/* <Block props='C++' containerRef={containerRef} /> */}
     <div className='h-[100%]'>
     <ParticlesComponent>
     
      </ParticlesComponent>
     </div>
     <div>
      {/* <Block/> */}
     </div>
     <Block props='C++' containerRef={containerRef} />
     <Block props='JAVA' containerRef={containerRef} />
     <Block props='PYTHON' containerRef={containerRef} />
    </div>
  );
}

export default App;
