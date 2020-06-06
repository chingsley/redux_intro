import React from "react";
import MovieList from "./components/MovieList";
import Title from "./components/Title";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Title />
      <MovieList />
    </div>
  );
}

export default App;
