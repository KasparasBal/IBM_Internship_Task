import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import { useState } from "react";
import searchInputContext from "./context/searchInputContext";
import dateFromContext from "./context/dateFromContext";
import dateToContext from "./context/dateToContext";
import FromContext from "./context/FromContext";
import ToContext from "./context/ToContext";
import executedContext from "./context/executedContext";
import postedContext from "./context/postedContext";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [From, setFrom] = useState("");
  const [To, setTo] = useState("");
  const [executed, setExecuted] = useState("");
  const [posted, setPosted] = useState("");
  return (
    <div>
      <searchInputContext.Provider value={{ searchInput, setSearchInput }}>
        <dateFromContext.Provider value={{ dateFrom, setDateFrom }}>
          <dateToContext.Provider value={{ dateTo, setDateTo }}>
            <FromContext.Provider value={{ From, setFrom }}>
              <ToContext.Provider value={{ To, setTo }}>
                <executedContext.Provider value={{ executed, setExecuted }}>
                  <postedContext.Provider value={{ posted, setPosted }}>
                    <Routes>
                      <Route path="/" element={<Homepage />} />
                      <Route path="/profile" element={<Profile />} />
                    </Routes>
                  </postedContext.Provider>
                </executedContext.Provider>
              </ToContext.Provider>
            </FromContext.Provider>
          </dateToContext.Provider>
        </dateFromContext.Provider>
      </searchInputContext.Provider>
    </div>
  );
};

export default App;
