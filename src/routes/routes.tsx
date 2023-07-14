import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../page/Login";
import NotFound from "../page/NotFound";
import Signup from "../page/Signup";
import Home from "../page/Home";
import Books from "../page/Books";
import AddBook from "../page/AddBook";
import HomeBook from "../page/HomeBook";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <HomeBook />,
          },
          {
            path: "/books",
            element: <Books />,
          },
          {
            path: "/add-new-book",
            element: <AddBook />,
          },
          {
            path: "/wishlist",
            element: <AddBook />,
          },
        ],
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
    ],
  },
]);

export default routes;
