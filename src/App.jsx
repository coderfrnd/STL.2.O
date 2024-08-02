import React, { useRef } from 'react';
// import Block from './Component/Reusable//Block';
// import ParticlesComponent from './Component/Particle/particle';
import { BrowserRouter, Routes, Route, MemoryRouter } from "react-router-dom";
import './App.css'
import Start from './Component/Extra/start';
import CppFront from './Language/CPP/CppFront';
import JavaFront from './Language/JAVA/JavaFront';
import PythonFront from './Language/PYTHON/PythonFront';
import Map from './Language/CPP/Map';
import Vector from './Language/CPP/Vector';


const App = () => {
  const containerRef = useRef(null);

  return (
    <MemoryRouter>
      <Routes>
       
        <Route path='/' element={<Start /> } />
        <Route path='/cpp' element={<CppFront /> } />
        <Route path='/java' element={<JavaFront /> } />
        <Route path='/python' element={<PythonFront /> } />
        <Route path='/map' element={<Map/> } />
        <Route path="/vector" element={<Vector/>} />
    
      </Routes>
    </MemoryRouter>
  );
}

export default App;
