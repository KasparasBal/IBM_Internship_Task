import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
