import Button from "../../../../Component/button/Button";
import "./ButtonArea.css";

function ButtonArea() {
  return (
    <div className="button-area">
      <Button buttonText={"Start"} className={"button-area_start"} />
      <Button buttonText={"Pause"} className={"button-area_break"} />
      <Button buttonText={"Reset"} className={"button-area_reset"} />
    </div>
  );
}
export default ButtonArea;
