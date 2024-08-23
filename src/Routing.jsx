import { createBrowserRouter } from "react-router-dom"; // Correct import
import LayOut from "./LayOut"; // Correct import for LayOut component
import Home from "./Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ], // Correct JSX syntax
  },
]);
