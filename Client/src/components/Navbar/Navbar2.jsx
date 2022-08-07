//Navigation

import { Link } from "react-router-dom";
import LogoIcon from "./svgs/LogoIcon";

//Context
import { useContext } from "react";
import searchInputContext from "../../context/searchInputContext";
import dateFromContext from "../../context/dateFromContext";
import dateToContext from "../../context/dateToContext";
import executedContext from "../../context/executedContext";
import postedContext from "../../context/postedContext";

const Navbar = () => {
  const { setDateFrom } = useContext(dateFromContext);
  const { setDateTo } = useContext(dateToContext);
  const { setSearchInput } = useContext(searchInputContext);
  const { setExecuted } = useContext(executedContext);
  const { setPosted } = useContext(postedContext);

  const prevPageHandler = () => {
    setDateFrom("");
    setDateTo("");
    setSearchInput("");
    setExecuted(false);
    setPosted(false);
  };
  return (
    <div className="bg-gray-900 flex items-center justify-between p-10  top-0 border-b-4 border-blue-500 ">
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
