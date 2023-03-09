// using axios for our fetch requests
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import useLocalStorage from "use-local-storage";
// import to let us use React 'Browser Router' as 'Router'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// Component Imports
import Navbar from "./components/Navbar";


function App() {

  //theme code
  // const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");

  // const switchTheme = () => {
  //   const newTheme = theme === "dark" ? "light" : "dark";
  //   setTheme(newTheme);
  // }

  return (
    <div className="App" data-theme={null}>
      <Router>
        <Routes>
          {/* Defining each route for pages depending on path */}
          <Route
            path="/"
            element={<>
              <Navbar />
              <Searchbar />
            </>}
          >
          </Route>
          <Route 
            path="/login"
            element={<> 
            {/* <> after element lets you add multiple components. */}
              <Navbar />
            </>}
            >
          </Route>
          <Route
            path="/signup"
            element={<>
              <Navbar />
            </>}
            >
          </Route>
          {/* catch all route, * is anything we haven't defined, a 404 route */}
          <Route
            path="*"
            element={<>
            <div><h2>Nothing Here</h2></div>
            </>}
            >
          </Route>
        </Routes>
      </ Router>
    </div>

  );
}

export default App;
