import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from "./componets/Signup";
import Signin from "./componets/Signin";
import Dashboard from "./componets/Dashboard";
import PrivateRoute from "./componets/PrivateRoute";
import { Mypost } from "./Mypost";
import { Form } from "./Form";
import { Recent } from "./Recent";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signup", element: <Signup /> },
  { path: "/signin", element: <Signin /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {path: "/mypost", element: <Mypost /> },
  {path: "/posts/new", element: <Form /> },
  {path: "/recent", element: <Recent /> },
]);
