import { createBrowserRouter } from "react-router-dom"; // Correct import
import LayOut from "./LayOut"; // Correct import for LayOut component
import Home from "./Pages/Home";
import Shirts from "./Pages/Shirts";
import { Tshirts } from "./Pages/Tshirts";
import { PoloShirts } from "./Pages/PoloShirts";
import { Panjabis } from "./Pages/Panjabis";

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
      {
        path: "/PoloShirts",
        element: <PoloShirts></PoloShirts>,
      },
      {
        path: "/panjbis",
        element: <Panjabis></Panjabis>,
      },
    ], // Correct JSX syntax
  },
]);
