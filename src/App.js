import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home'
import About from './About'
import UserProfile from './UserProfile'
import NoMatch from './NoMatch'


function App() {

  return (
    <div className="App">
      <div>
        <Link to="/">Home</Link>
      </div>
      {Array(10)
        .fill()
        .map((ignoredValue, index) => index + 1)
        .map((id) => (
          <div key={id}>
            <Link to={`/user/${id}`}>User {id}</Link>
          </div>
        ))}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:userID"
               element={<UserProfile />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}


export default App;

