import React from "react";
import Home from "./Home";
import Browse from "./Browse";
import { createBrowserRouter, Route } from "react-router";
import { RouterProvider } from "react-router";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
