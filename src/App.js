import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";


function App() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <Navbar></Navbar>
      <Home></Home>

      <SocialLinks></SocialLinks>
    </div>
  );
}

export default App;
