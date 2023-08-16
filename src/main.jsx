import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Shop from "./components/Shop/Shop";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Review from "./components/Review/Review.jsx";
import Inventory from "./components/Inventory/Inventory.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import Orders from "./components/orders/Orders.jsx";
import cartProductLoader from "./loader/cartProductLoader.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "order",
        element: <Orders />,
        loader: cartProductLoader,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
