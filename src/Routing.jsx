import { createBrowserRouter } from "react-router-dom"; // Correct import
import LayOut from "./LayOut"; // Correct import for LayOut component
import Home from "./Pages/Home";
import Shirts from "./Pages/Shirts";
import { Tshirts } from "./Pages/Tshirts";
import { PoloShirts } from "./Pages/PoloShirts";
import { Panjabis } from "./Pages/Panjabis";
import { Pents } from "./Pages/Pents";
import { ErrorPage } from "./Pages/ErrorPage";
import DetailsPage from "./Pages/DetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "/pents",
        element: <Pents></Pents>,
      },
      {
        path: "/details/:id",
        element: <DetailsPage></DetailsPage>,
      },
    ], // Correct JSX syntax
  },
]);
