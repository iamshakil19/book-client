import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../page/Login";
import NotFound from "../page/NotFound";
import Signup from "../page/Signup";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
