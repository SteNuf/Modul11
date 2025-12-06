import "./Timeinput.css";

function Timeinput() {
  return (
    <div className="time-input">
      <label htmlFor="time-input-title">Zeit festlegen:</label>
      <input id="time-input" type="number" min="0" placeholder="0" />
    </div>
  );
}

export default Timeinput;
