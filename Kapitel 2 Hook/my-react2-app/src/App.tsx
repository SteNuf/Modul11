import { useEffect } from "react";
import "./App.css";
import { userFormimInput } from "./hooks/useFormInput";

function App() {
  const vorname = userFormimInput("");
  const nachname = userFormimInput("");

  return (
    <>
      Vorname
      <input
        value={vorname.value}
        onChange={vorname.handleInputChangeEvent}
      ></input>
      Nachname
      <input
        value={nachname.value}
        onChange={nachname.handleInputChangeEvent}
      ></input>
    </>
  );
}

export default App;
