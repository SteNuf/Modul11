import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import FirstRoute from "./routes/firstroute/FirstRoute";
import SecondRoute from "./routes/secondroute/SecondRoute";
import Root from "./routes/Root";
import ErrorPage from "./routes/error/ErrorPage";
import Index from "./routes/Index";
import { ClickerContext } from "./context/ClickerContext";
import { useReducer } from "react";
import { clickerReducer } from "./hook/clickerReducer";

function App() {
  const [count, setCount] = useReducer(clickerReducer, 0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Index /> },
        {
          path: "first",
          element: <FirstRoute />,
          children: [
            { index: true, element: <FirstRoute /> },
            {
              path: ":itemId",
              element: <FirstRoute />,
              children: [{ path: "edit", element: <FirstRoute /> }],
            },
          ],
        },
        { path: "second", element: <SecondRoute /> },
      ],
    },
  ]);

  return;
  <ClickerContext.Provider value={{ count, setCount }}>
    <RouterProvider router={router} />;
  </ClickerContext.Provider>;
}

export default App;
