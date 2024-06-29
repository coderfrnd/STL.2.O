import React from 'react'

const Block = ({props,src}) => {
  return (
    <div className='bg-slate-900 flex h-[50px] w-[180px] justify-center items-center border-[1px] border-sky-200 hover:border-purple-600 '>
         <div>
          <img src={src} alt="" />
         </div>
         <button className='text-white'>
          {props}
         </button>
    </div>
  )
}

export default Block