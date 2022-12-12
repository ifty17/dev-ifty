import { createBrowserRouter } from "react-router-dom";
import AllComponents from "../components/AllComponents";
import Blogs from "../components/Blogs";
import DetailsPCB from "../components/DetailsPCB";
import Home from "../components/Home";
import Main from "../layouts/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <AllComponents></AllComponents>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        element: <DetailsPCB></DetailsPCB>,
        loader: ({ params }) => fetch(`https://dev-ifty-server-ifty17.vercel.app/details/${params.id}`)
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        
      },
    ],
  },
]);

export default router;