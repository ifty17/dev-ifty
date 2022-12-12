import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";


function App() {
  return (
    <div className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
