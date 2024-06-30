"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Block = ({ props, src, containerRef }) => {
  return (
    <motion.div
      className='bg-slate-900 flex h-[50px] w-[180px] justify-center items-center border-[1px] border-sky-200 hover:bg-black transition-all'
      whileHover={{
        background: 'black',
        borderImage: 'linear-gradient(to right, #9f7aea, #6b46c1) 1'
      }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.2}
      style={{ position: 'absolute' }}
      whileDrag={{scale:1.2}} 
    >
      <div>
        {src && <img src={src} alt="" />}
      </div>
      <button className='text-white'>
        {props}
      </button>
    </motion.div>
  );
}

export default Block;
