//Navigation

import { Link } from "react-router-dom";
import LogoIcon from "./svgs/LogoIcon";

//Context
import { useContext } from "react";
import searchInputContext from "../../context/searchInputContext";
import dateFromContext from "../../context/dateFromContext";
import dateToContext from "../../context/dateToContext";

const Navbar = () => {
  const { setDateFrom } = useContext(dateFromContext);
  const { setDateTo } = useContext(dateToContext);
  const { setSearchInput } = useContext(searchInputContext);

  const prevPageHandler = () => {
    setDateFrom("");
    setDateTo("");
    setSearchInput("");
  };
  return (
    <div className="bg-gray-900 flex items-center justify-between p-10 sticky top-0 shadow-blue-500/50 shadow-lg ">
      <Link
        to="/"
        onClick={prevPageHandler}
        className="text-slate-300 w-12 h-12 cursor-pointer "
      >
        <LogoIcon />
      </Link>

      <Link
        to="/"
        onClick={prevPageHandler}
        className="text-slate-300 w-auto h-2/12 cursor-pointer text-2xl bg-sky-500 rounded-md p-2"
      >
        Go Back
      </Link>
    </div>
  );
};

export default Navbar;
