import { createBrowserRouter } from "react-router-dom"; // Correct import
import LayOut from "./LayOut"; // Correct import for LayOut component
import Home from "./Pages/Home";
import Shirts from "./Pages/Shirts";
import Tshirts from "./pages/Tshirts";
import { PoloShirts } from "./Pages/PoloShirts";
import { Panjabis } from "./Pages/Panjabis";
import { Pents } from "./Pages/Pents";
import { ErrorPage } from "./Pages/ErrorPage";
import DetailsPage from "./Pages/DetailsPage";
import Accesories from "./Pages/Accesories";
import Shoes from "./Pages/Shoes";
import LoginForm from "./Pages/login";
import RegistrationForm from "./Pages/Registation";
import AddTpCart from "./Pages/AddTpCart";
import Scarch from "./Pages/Scarch";
import Hoddie from "./Pages/Hoddie";
import Jacket from "./Pages/Jacket";
import Sweatshirts from "./Pages/Sweatshirts";

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
        path: "/PoloShirts",
        element: <PoloShirts></PoloShirts>,
      },
      {
        path: "/tshirts",
        element: <Tshirts></Tshirts>,
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
      {
        path: "/accessories",
        element: <Accesories></Accesories>,
      },
      {
        path: "/shoes",
        element: <Shoes></Shoes>,
      },
      {
        path: "/login",
        element: <LoginForm></LoginForm>,
      },
      {
        path: "/registation",
        element: <RegistrationForm></RegistrationForm>,
      },
      {
        path: "/addtocart",
        element: <AddTpCart></AddTpCart>,
      },
      {
        path: "/scarch",
        element: <Scarch></Scarch>,
      },
      {
        path: "/hoddie",
        element: <Hoddie></Hoddie>,
      },
      {
        path: "/jacket",
        element: <Jacket></Jacket>,
      },
      {
        path: "/Sweatshirt",
        element: <Sweatshirts></Sweatshirts>,
      },
    ], // Correct JSX syntax
  },
]);
