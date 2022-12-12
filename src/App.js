import React, { useState } from "react";
import Header from './Header'
import Content from "./Content"

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);
  return (
    <div>
      <Header loggedIn={loggedIn} toggleLoggedIn={toggleLoggedIn} />
      <Content loggedIn={loggedIn} />
    </div>
  );
}

export default App;
