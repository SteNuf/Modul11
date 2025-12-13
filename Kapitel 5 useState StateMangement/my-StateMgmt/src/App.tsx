import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [countQbject, setCountQbject] = useState({ count: 0 });

  useEffect(() => {
    console.log("Rerender", count);
    console.log("Rerender", countQbject);
  }, [countQbject]);

  function handleButtonClick() {
    console.log("Clicking", count);
    setCount(count + 1);
    console.log(count);
    setCountQbject({ ...countQbject, ...{ count: count + 1 } });
  }
  return <button onClick={handleButtonClick}>Click{count}</button>;
}

export default App;
