//Navigation

import { Link } from "react-router-dom";
import LogoIcon from "./svgs/LogoIcon";
const Navbar = () => {
  return (
    <div className="bg-gray-900 flex items-center justify-between p-10 sticky top-0 shadow-blue-500/50 shadow-lg ">
      <Link to="/" className="text-slate-300 w-12 h-12 cursor-pointer ">
        <LogoIcon />
      </Link>

      <Link
        to="/"
        className="text-slate-300 w-auto h-2/12 cursor-pointer text-2xl bg-sky-500 rounded-md p-2"
      >
        Go Back
      </Link>
    </div>
  );
};

export default Navbar;
