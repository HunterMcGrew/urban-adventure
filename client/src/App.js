import axios from "axios";
import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import useLocalStorage from "use-local-storage";

function App() {

  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          {!data ? "Loading..." : data}
        </p>
        <p>
          {!data2 ? "Loading..." : data2}
        </p>
      </header>
    </div>
  );
}

export default App;
