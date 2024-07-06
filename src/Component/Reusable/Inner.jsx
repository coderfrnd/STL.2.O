import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Inner = ({ children,props }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="text-black flex w-screen">
        <motion.div
          onClick={() => setIsOpen(true)}
          className="p-4 border m-2 cursor-pointer bg-white w-[100%] h-[16%] flex justify-center "
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
