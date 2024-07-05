import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Block from '../../Component/Reusable/Block';

const items = [
  { id: 1, subtitle: 'Subtitle 1', title: 'Title 1' },
  { id: 2, subtitle: 'Subtitle 2', title: 'Title 2' },
  { id: 3, subtitle: 'Subtitle 3', title: 'Title 3' }
];

const Map = () => {
  const containerRef = useRef(null);
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="h-screen w-screen bg-[#AE04FF]">
      <div className="flex justify-center mb-2 h-[10%]">
        <Block props="Reverse" containerRef={containerRef} navigateTo="/cpp" />
      </div>
      
      <div className='text-black flex'>
        {items.map(item => (
          <motion.div 
            key={item.id} 
            layoutId={item.id} 
            onClick={() => setSelectedId(item.id)} 
            className="p-4 border m-2 cursor-pointer bg-white w-[50%]"
          >
            <motion.h5>{item.subtitle}</motion.h5>
            <motion.h2>{item.title}</motion.h2>
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedId && (
            <motion.div layoutId={selectedId} className="fixed inset-0 bg-white p-4 text-black">
              {items.filter(item => item.id === selectedId).map(item => (
                <React.Fragment key={item.id}>
                  <motion.h5>{item.subtitle}</motion.h5>
                  <motion.h2>{item.title}</motion.h2>
                  <motion.button 
                    onClick={() => setSelectedId(null)} 
                    className="mt-4 p-2 bg-blue-500 text-white rounded"
                  >
                    Close
                  </motion.button>
                </React.Fragment>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Map;
