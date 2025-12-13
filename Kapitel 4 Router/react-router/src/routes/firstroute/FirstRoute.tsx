import { useParams } from "react-router-dom";

function FirstRoute() {
  const { itemId } = useParams();
  return <>First Route {itemId}</>;
}

export default FirstRoute;
