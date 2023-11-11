import { useState } from "react";
import "./App.css";
import React from "react";
import Post from "./components/Post";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <Post></Post>
    </div>
  );
}

export default App;
