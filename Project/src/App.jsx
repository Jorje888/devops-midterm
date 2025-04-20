import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Routes, Route, Link } from "react-router-dom";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("Maybe");

  const setYes = () => setStatus("Yes");
  const setNo = () => setStatus("No");
  const setMaybe = () => setStatus("Maybe");

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p />
        <button onClick={() => {}}>Is it prime: {status}</button>
        <p />
        <Link to="/info">What does Prime mean?</Link>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
