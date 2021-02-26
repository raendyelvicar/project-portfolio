import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeroSection from "./pages/HeroSection";
import Pages from "./pages";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar";
import ToggleNav from "./components/ToggleMenu";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <ToggleNav isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <Pages />
    </>
  );
}

export default App;
