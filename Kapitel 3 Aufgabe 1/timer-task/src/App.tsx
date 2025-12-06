import "./App.css";
import Button from "./Component/button/Button";

function App() {
  return (
    <div className="section-button">
      <Button buttonText={"Start"} />
      <Button buttonText={"Pause"} />
      <Button buttonText={"Reset"} />
    </div>
  );
}

export default App;
