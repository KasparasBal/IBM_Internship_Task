import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import { useState } from "react";
import searchInputContext from "./context/searchInputContext";
import dateFromContext from "./context/dateFromContext";
import dateToContext from "./context/dateToContext";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  return (
    <div>
      <searchInputContext.Provider value={{ searchInput, setSearchInput }}>
        <dateFromContext.Provider value={{ dateFrom, setDateFrom }}>
          <dateToContext.Provider value={{ dateTo, setDateTo }}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </dateToContext.Provider>
        </dateFromContext.Provider>
      </searchInputContext.Provider>
    </div>
  );
}

export default App;
