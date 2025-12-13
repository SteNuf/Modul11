import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ClickerContext } from "../../context/ClickerContext";

function FirstRoute() {
  const { itemId } = useParams();
  const { count, setCount } = useContext(ClickerContext);

  return <button onClick={() => setCount(count + 1)}>Click {count}</button>;
}

export default FirstRoute;
