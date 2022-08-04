import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import { useState } from "react";
import searchInputContext from "./context/searchInputContext";
import dateFromContext from "./context/dateFromContext";
import dateToContext from "./context/dateToContext";
import inputErrorContext from "./context/InputErrorContext";
import FromContext from "./context/FromContext";
import ToContext from "./context/ToContext";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [inputError, setInputError] = useState("");
  const [From, setFrom] = useState("");
  const [To, setTo] = useState("");
  return (
    <div>
      <searchInputContext.Provider value={{ searchInput, setSearchInput }}>
        <dateFromContext.Provider value={{ dateFrom, setDateFrom }}>
          <dateToContext.Provider value={{ dateTo, setDateTo }}>
            <FromContext.Provider value={{ From, setFrom }}>
              <ToContext.Provider value={{ To, setTo }}>
                <inputErrorContext.Provider
                  value={{ inputError, setInputError }}
                >
                  <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/profile" element={<Profile />} />
                  </Routes>
                </inputErrorContext.Provider>
              </ToContext.Provider>
            </FromContext.Provider>
          </dateToContext.Provider>
        </dateFromContext.Provider>
      </searchInputContext.Provider>
    </div>
  );
}

export default App;
