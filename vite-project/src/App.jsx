import { useState } from "react";
import "./App.css";
import React from "react";
import PostCell from "./components/PostCell";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <PostCell></PostCell>
    </div>
  );
}

export default App;
