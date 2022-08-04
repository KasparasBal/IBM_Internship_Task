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
import { useContext } from "react";
import dateFromContext from "../../context/dateFromContext";
import dateToContext from "../../context/dateToContext";
import FromContext from "../../context/FromContext";
import ToContext from "../../context/ToContext";

const Navbar = () => {
  const { dateFrom, setDateFrom } = useContext(dateFromContext);
  const { dateTo, setDateTo } = useContext(dateToContext);
  const { from, setFrom } = useContext(FromContext);
  const { to, setTo } = useContext(ToContext);

  let navigate = useNavigate();

  const SearchHandler = () => {
    setFrom(dateFrom);
    setTo(dateTo);
    navigate("/profile");
  };

  return (
    <div className="bg-gray-900 flex items-center justify-between p-10 sticky top-0 shadow-blue-500/50 shadow-lg ">
      <Link to="/" className="text-slate-300 w-12 h-12 cursor-pointer ">
        <LogoIcon />
      </Link>
      <SearchBar />
      <DatePicker />
      <div
        onClick={SearchHandler}
        className="text-gray-900  p-2 cursor-pointer  bg-gray-100 rounded-lg "
      >
        <SearchIcon />
      </div>
    </div>
  );
};

export default Navbar;
