import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import HeroSection  from './pages/HeroSection';
import Pages from './pages';
import Navbar       from './components/Navbar';
import ToggleNav    from './components/ToggleMenu';
import Card         from './components/Card';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <Router>
      <Navbar toggle={toggle}/>
      <ToggleNav isOpen={isOpen} toggle={toggle}/>
      <HeroSection />
      <Pages/>
    </Router>
    
  );
}

export default App;
