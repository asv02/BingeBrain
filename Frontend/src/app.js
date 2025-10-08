import React from "react";
import "../src/index.css";
import Home from "./components/Home";
import Browse from "./components/Browse";
import { createBrowserRouter, Route } from "react-router";
import { RouterProvider } from "react-router";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import AppStore from "./utils/appStore";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/Browse",
      element: <Browse />,
    },
  ]);
  return (
    <Provider store={AppStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
