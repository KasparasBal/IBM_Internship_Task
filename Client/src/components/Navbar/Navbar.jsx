// Sm-Components
import SearchBar from "./sm-components/SearchBar";
import DatePicker from "./sm-components/DatePicker";
//Svgs
import SearchIcon from "./svgs/SearchIcon";
import LogoIcon from "./svgs/LogoIcon";

const Navbar = () => {
  return (
    <div className="bg-gray-900 flex items-center justify-between p-10 sticky top-0 shadow-blue-500/50 shadow-lg">
      <div className="text-slate-300 w-12 h-12">
        <LogoIcon />
      </div>
      <SearchBar />
      <DatePicker />
      <div className="text-gray-900  p-2 cursor-pointer  bg-gray-100 rounded-lg ">
        <SearchIcon />
      </div>
    </div>
  );
};

export default Navbar;
