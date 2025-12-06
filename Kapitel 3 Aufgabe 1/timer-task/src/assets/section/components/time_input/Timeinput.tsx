function Timeinput() {
  return (
    <div className="">
      <label htmlFor="time-input">Zeit festlegen:</label>
      <input id="time-input" type="number" min="0" placeholder="Seconds" />
    </div>
  );
}

export default Timeinput;
