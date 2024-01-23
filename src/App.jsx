import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Mercury from "./pages/mercury";
import Venus from "./pages/venus";
import Earth from "./pages/earth";
import Mars from "./pages/mars";
import Jupiter from "./pages/jupiter";
import Saturn from "./pages/saturn";
import Uranus from "./pages/uranus";
import Neptune from "./pages/neptune";
import "./App.css";
import data from "./data/data";
import Hero from "./components/hero/hero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "",
        element: (
          <>
            <Mercury />
          </>
        ),
      },
      {
        path: "Mercury",
        element: (
          <>
            <Mercury />
          </>
        ),
      },
      {
        path: "Venus",
        element: (
          <>
            <Venus />
          </>
        ),
      },
      {
        path: "Earth",
        element: (
          <>
            <Earth />
          </>
        ),
      },
      {
        path: "Mars",
        element: (
          <>
            <Mars />
          </>
        ),
      },
      {
        path: "Saturn",
        element: (
          <>
            <Saturn />
          </>
        ),
      },
      {
        path: "Jupiter",
        element: (
          <>
            <Jupiter />
          </>
        ),
      },
      {
        path: "Neptune",
        element: (
          <>
            <Neptune />
          </>
        ),
      },
      {
        path: "Uranus",
        element: (
          <>
            <Uranus />
          </>
        ),
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

// Router provider - component
