import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div style={{ padding: 50 }}>
        <Card />
      </div>
    </div>
  );
};

export default App;
