import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import Abilities from './components/Abilities/Abilities';
import Projects from './components/Projects/Projects';
import SocialMedia from './components/SocialMedia/SocialMedia';
import NavBar from './components/NavBar/NavBar';
import Presentation from './components/Presentation/Presentation';
import './index.css';

const App = () => {
  return (
    <>
      <NavBar />
      <br /><br /><br />
      <Routes>
        <Route path='/' element = {<Presentation />}/> 
        <Route path='/about' element = {<AboutMe />}/> 
        <Route path='/technologies' element = {<Abilities />}/> 
        <Route path='/social' element = {<SocialMedia />}/> 
        <Route path='*' element = {<Navigate to = "/" />}/> 
      </Routes>
    </>
  );
};

export default App;