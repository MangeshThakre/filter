import "./App.css";
import axios from "axios";
import data from "./Data/data.js";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
