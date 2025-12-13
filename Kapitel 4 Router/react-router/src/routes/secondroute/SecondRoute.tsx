import { useContext } from "react";
import { ClickerContext } from "../../context/ClickerContext";

function SecondRoute() {
  const { count } = useContext(ClickerContext);
  return <>Button wurde {count} mal geklickt</>;
}

export default SecondRoute;
