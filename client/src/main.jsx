import axios from "axios";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import DetailsProduct from "./pages/DetailsProduct/DetailsProduct";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import DataPage from "./pages/DataPage/DataPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: async () => {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/books`
          );
          return response.data;
        },
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/manga/:id",
        element: <DetailsProduct />,
        loader: async ({ params }) => {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/books/${params.id}`
          );
          return response.data;
        },
      },
      {
        path: "/data",
        element: <DataPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
