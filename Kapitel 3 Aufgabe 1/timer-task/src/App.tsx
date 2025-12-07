import "./App.css";
import { useEffect, useRef, useState } from "react";

function useFormInput() {
  const [value, setValue] = useState<number>(0);
  function handleInputChangeEvent(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(Number(event.target.value));
  }

  return { value, handleInputChangeEvent };
}

function App() {
  const { value, handleInputChangeEvent } = useFormInput();
  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(0);
  const [pause, setPause] = useState(false);
  const intervalId = useRef(-1);

  useEffect(() => {
    if ((now - startTime) / 1000 >= value) {
      clearInterval(intervalId.current);
      setNow(startTime + value * 1000);
    }
  }, [startTime, now, value]);

  function startInterval() {
    intervalId.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStart() {
    if (!pause) {
      clearInterval(intervalId.current);
      setPause(false);
      const dateNow = Date.now();
      setStartTime(dateNow);
      setNow(dateNow);

      startInterval();
    } else {
      const elapsepdTime = now - startTime;
      const dateNow = Date.now();
      setNow(dateNow);
      setStartTime(dateNow - elapsepdTime);
      setPause(false);
      startInterval();
    }
  }

  function handlePause() {
    clearInterval(intervalId.current);
    setPause(true);
  }

  function handleReset() {
    clearInterval(intervalId.current);
    setPause(false);
    setStartTime(0);
    setNow(0);
  }

  const secondsLeft = value - (now - startTime) / 1000;

  return (
    <div>
      <span className="t-4">Zeit testlegen:</span>
      <br />
      <input
        type="number"
        className="input"
        value={value}
        onChange={handleInputChangeEvent}
      />
      <br />
      <span className="t-1 bold">Time left: </span>
      <br />
      <span className="t-1 bold">{secondsLeft.toFixed(3)}</span>
      <div className="button-row">
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
