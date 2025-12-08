import { useRouteError, type ErrorResponse } from "react-router-dom";

function ErrorPage() {
  const error: ErrorResponse = useRouteError() as ErrorResponse;
  return (
    <div>
      <h1>Fehlerseite</h1>
      <p>Hoppla! Etwas ist schiefgelaufen.</p>
      <p>
        <i>{error.statusText};</i>
      </p>
    </div>
  );
}
export default ErrorPage;
