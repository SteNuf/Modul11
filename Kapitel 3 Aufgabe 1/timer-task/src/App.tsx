import "./App.css";
import ButtonArea from "./assets/section/components/button_area/ButtonArea";
import Timeinput from "./assets/section/components/time_input/Timeinput";
import TimeLeft from "./assets/section/components/time_left/TimeLeft";

function App() {
  return (
    <div className="App">
      <Timeinput />
      <TimeLeft />
      <ButtonArea />
    </div>
  );
}

export default App;
