import { createBrowserRouter } from "react-router-dom"; // Correct import
import LayOut from "./LayOut"; // Correct import for LayOut component
import Home from "./Pages/Home";
import Shirts from "./Pages/Shirts";
import { Tshirts } from "./Pages/Tshirts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/shirts",
        element: <Shirts></Shirts>,
      },
      {
        path: "/tShirts",
        element: <Tshirts></Tshirts>,
      },
    ], // Correct JSX syntax
  },
]);
