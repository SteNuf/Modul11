import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [arrayState, setArrayState] = useState([1]);
  const [objectState, setObjectState] = useState({ attribute: "a" });

  useEffect(() => {
    console.log(count);
    console.log(arrayState);
    console.log(objectState);
    return () => {
      console.log(count, "RETURNED EFFECT");
      console.log(arrayState, "RETURNED EFFECT");
      console.log(objectState, "RETURNED EFFECT");
    };
  }, [count, arrayState, objectState]);

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
        <button onClick={() => setArrayState([...arrayState])}>
          arrayState length is{arrayState.length}
        </button>
        <button
          onClick={() => setObjectState({ ...objectState, attribute: "b" })}
        >
          object attribute is {objectState.attribute}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
