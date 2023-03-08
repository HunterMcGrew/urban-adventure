import axios from "axios";
import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import useLocalStorage from "use-local-storage";

function App() {

  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);

  //theme code
  // const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");

  // const switchTheme = () => {
  //   const newTheme = theme === "dark" ? "light" : "dark";
  //   setTheme(newTheme);
  // }


  // haven't wrote an api in awhile, testing it out
  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/test");
        setData(response.data.message);
        const response2 = await axios.get("/jane");
        setData2(response2.data.message);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [])

  return (
    <Navbar></Navbar>
  );
}

export default App;
