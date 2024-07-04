import React from 'react'
import Block from '../Reusable/Block';
const Start = ({props}) => {
  return (
    <div className='h-[100%] w-[100%] flex-col items-center justify-center'>
      
    <div className='m-12 p-2 h-[10%] items-center flex justify-center'><Block props='C++' containerRef={props} /></div>  
    <div className='m-12 p-2 h-[10%] items-center flex justify-center'><Block props='JAVA' containerRef={props} /></div> 
    <div className='m-12 p-2 h-[10%] items-center flex justify-center'><Block props='PYTHON' containerRef={props} /></div> 
     </div>
  )
}

export default Start