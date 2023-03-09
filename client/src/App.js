import axios from "axios";
import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

import Searchbar from "./components/Searchbar";

import useLocalStorage from "use-local-storage";


function App() {


  //theme code
  // const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");

  // const switchTheme = () => {
  //   const newTheme = theme === "dark" ? "light" : "dark";
  //   setTheme(newTheme);
  // }


  // haven't wrote an api in awhile, testing it out




  return (
    <div>
      <Navbar></Navbar>
      <Searchbar></Searchbar>
    </div>

  );
}

export default App;
