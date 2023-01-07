import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";


function App() {
  return (
    <div className="bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-700">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
