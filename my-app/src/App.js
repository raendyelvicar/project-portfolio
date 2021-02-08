import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import './App.css';
import Home from './pages';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ToggleNav from './components/ToggleMenu';
import Card from './components/Card';

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
      <Card/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about"  component={About} />
        <Route path="/portfolio"  component={Portfolio} />
        <Route path="/contact"  component={Contact} />
      </Switch>
    </Router>
    
  );
}

export default App;
