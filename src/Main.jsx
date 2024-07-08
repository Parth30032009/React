import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Body from "./Components/Body";
import Home from "./Components/Home";
import About from "./Components/AboutUs";
import Service from "./Components/Service";
import Help from "./Components/Help";
import Error from "./Components/ErrorPage";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "Home", element: <Home /> },
      { path: "About", element: <About /> },
      { path: "Service", element: <Service /> },
      { path: "Help", element: <Help /> },
      {path:"/rest/:id"}
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
