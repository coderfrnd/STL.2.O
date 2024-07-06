import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Block from '../../Component/Reusable/Block';
import Inner from '../../Component/Reusable/Inner';



const Map = () => {
  const containerRef = useRef(null);
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="h-screen w-screen bg-[#AE04FF]">
      <div className="flex justify-center mb-2 h-[10%]">
        <Block props="Reverse" containerRef={containerRef} navigateTo="/cpp" />
      </div>
      <div className='flex space-x-6 h-[50%] w-screen'>
      <Inner children='Initilize'
      props={
        <div>
          HH
          </div>
      }
      />
       <Inner children='Usage'
      props={
        <div>
          Usage
          </div>
      }
      />
       <Inner children='Use Through Iterator'
      props={
        <div>
          Iterator
          </div>
      }
      />
      </div>
     
    </div>
  );
}

export default Map;
