import React from 'react'
import Block from './Component/Reusable/Block'

const App = () => {
  return (
    <div className='h-[100%] bg-black text-white flex justify-center'>
      <Block 
        props='C++'
      />
    </div>
  )
}

export default App