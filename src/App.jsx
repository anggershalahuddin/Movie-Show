import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./App.css";
import { useEffect } from "react";
import { getListPopularMovie } from "./action/movie";

const App = () => {
  const [popular, setPopular] = useState(null);
  useEffect(() => {
    getListPopularMovie(2).then((res) => {
      setPopular(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />

      <div style={{ padding: 50 }}>
        <div className="__list-card">
          {popular?.results?.map((el) => (
            <Card data={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
