import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import FirstRoute from "./routes/firstroute/FirstRoute";
import SecondRoute from "./routes/secondroute/SecondRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FirstRoute />,
      children: [
        { path: "/first", element: <FirstRoute /> },
        { path: "/second", element: <SecondRoute /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
