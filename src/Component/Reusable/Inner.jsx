import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Inner = ({ children,props }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="text-black flex flex-wrap w-[34%] justify-center items-center ">
        <motion.div
          onClick={() => setIsOpen(true)}
          className="p-4 border m-2 cursor-pointer bg-slate-900 text-white w-[80%] h-[16%] flex justify-center hover:bg-black transition-all  "
          whileHover={{
            background: 'black',
            borderImage: 'linear-gradient(to right, #9f7aea, #6b46c1) 1',
            scale: 1.1
          }}
        >
          <motion.h2 className=''>{children}</motion.h2>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="fixed inset-0 bg-white p-4 text-black flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-center text-black">
               {props}

                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="mt-4 p-2 bg-blue-500 text-white rounded"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Inner;
