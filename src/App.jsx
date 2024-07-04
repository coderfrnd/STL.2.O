import React, { useRef } from 'react';
import Block from './Component/Reusable/Block';
import ParticlesComponent from './Component/Particle/particle';
import { BrowserRouter, Routes, Route, MemoryRouter } from "react-router-dom";
import './App.css'
import Start from './Component/Extra/start';


const App = () => {
  const containerRef = useRef(null);

  return (
    <MemoryRouter>
  
       <Start/>
    
    
    </MemoryRouter>
  );
}

export default App;
