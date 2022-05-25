// import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import './App.css';


import Home from './components/Home'
import ContactUs from './components/ContactUs';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe'
import Services from './components/Services'
import GetInTouch from './components/GetInTouch'
import Footer from './components/Footer'
import Skills from './components/Skills';

function App() {

  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      document.body.style.background = '#14161e'
      document.body.style.color = 'white'
      setMode('dark')
    }
    else {
      document.body.style.background = '#fafafa'
      document.body.style.color = 'black'
      setMode('light')
    }
  }

  return (
    
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
            <Home mode={mode} toggleMode={toggleMode}/>
            <AboutMe mode={mode} toggleMode={toggleMode}/>
            <Skills mode={mode} toggleMode={toggleMode}/>
            <Services mode={mode} toggleMode={toggleMode}/>
            <GetInTouch mode={mode} toggleMode={toggleMode}/>
            <Footer mode={mode} toggleMode={toggleMode}/>
            </>
            }/>
          <Route index element={
            <>
            <Home mode={mode} toggleMode={toggleMode}/>
            <AboutMe mode={mode} toggleMode={toggleMode}/>
            <Skills mode={mode} toggleMode={toggleMode}/>
            <Services mode={mode} toggleMode={toggleMode}/>
            <GetInTouch mode={mode} toggleMode={toggleMode}/>
            <Footer mode={mode} toggleMode={toggleMode}/>
            </>
            }/>
          <Route path='contact' element={<ContactUs mode={mode} toggleMode={toggleMode} />}/>
          <Route path='projects' element={<Projects mode={mode} toggleMode={toggleMode} />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App

