import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./Layout/RootLayout";
import { Home } from "./Pages/Home";
import { Users } from "./Pages/Users";
import See from "./Pages/See";
import { Cart } from "./Pages/Cart";
import { Roznitsa } from "./Pages/Roznitsa";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/users',
          element: <Users />
        },
        {
          path: ":id",
          element: <See />
        },
        {
          path:"/about",
          element:<Cart/>
        },
        {
          path:"/roznitsa",
          element:<Roznitsa/>
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
