import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* <Outlet /> is used to render the child routes and is replaced by the component specified in the path */}
      <Outlet />
    </div>
  );
};

//createBrowserRouter - used to create routes. it accepts an array of objects as an argument which represents the routes and contains path, element and errorElement properties
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// RouterProvider - used to render the routes
root.render(<RouterProvider router={appRouter} />);
