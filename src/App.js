import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";


function App() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
