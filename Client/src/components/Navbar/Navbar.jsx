//Navigation
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// Sm-Components
import SearchBar from "./sm-components/SearchBar";
import DatePicker from "./sm-components/DatePicker";
//Svgs
import SearchIcon from "./svgs/SearchIcon";
import LogoIcon from "./svgs/LogoIcon";
//Context
import { useContext, useState } from "react";
import dateFromContext from "../../context/dateFromContext";
import dateToContext from "../../context/dateToContext";
import FromContext from "../../context/FromContext";
import ToContext from "../../context/ToContext";

import searchInputContext from "../..//context/searchInputContext";

const Navbar = () => {
  const { dateFrom } = useContext(dateFromContext);
  const { dateTo } = useContext(dateToContext);
  const { setFrom } = useContext(FromContext);
  const { setTo } = useContext(ToContext);
  // const { inputError } = useContext(inputErrorContext);
  const [missingInput, setMissingInput] = useState("");
  const [errorClass, setErrorClass] = useState("hidden");
  const { searchInput } = useContext(searchInputContext);

  let navigate = useNavigate();

  const SearchHandler = () => {
    if (
      dateFrom.length === 0 ||
      dateTo.length === 0 ||
      searchInput.length === 0
    ) {
      setMissingInput("All inputs are Required!");
      setErrorClass(
        "text-red-500 bg-white border border-red-500 p-1 rounded-md absolute top-1 right-2"
      );
    } else {
      setFrom(dateFrom);
      setTo(dateTo);
      navigate("/profile");
      setMissingInput("");
      setErrorClass("hidden");
    }
  };

  return (
    <div className="bg-gray-900 flex items-center justify-center z-20  sticky top-0 gap-20 shadow-blue-500/50 shadow-lg py-5 flex-col h-screen w-auto ">
      <Link to="/" className="text-slate-300 w-12 h-12 cursor-pointer ">
        <LogoIcon />
      </Link>
      <SearchBar />
      <DatePicker />
      <div className={errorClass}>{missingInput}</div>
      <div
        onClick={SearchHandler}
        className="text-gray-900  p-2 cursor-pointer   rounded-lg flex  bg-blue-500"
      >
        <h3 className="px-2 font-medium text-slate-100">Look Up</h3>
        <span className="text-slate-200">
          <SearchIcon />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
