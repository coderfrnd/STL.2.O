import React, { useRef } from 'react';
import Block from './Component/Reusable/Block';

const App = () => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className='h-screen w-screen bg-black text-white flex justify-center items-center relative'>
      <Block props='C++' containerRef={containerRef} />
    </div>
  );
}

export default App;
