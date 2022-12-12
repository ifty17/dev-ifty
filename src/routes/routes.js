import { createBrowserRouter } from "react-router-dom";
import AllComponents from "../components/AllComponents";
import DetailsPCB from "../components/DetailsPCB";
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
        path: "/details/:id",
        element: <DetailsPCB></DetailsPCB>,
        loader: ({ params }) => fetch(`https://dev-ifty-server-ifty17.vercel.app/details/${params.id}`)
      },
    ],
  },
]);

export default router;