import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home'
import About from './About'
import NoMatch from './NoMatch'


function App() {

  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
    </>
  );
}


export default App;
