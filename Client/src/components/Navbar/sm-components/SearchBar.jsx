import SearchIcon from "../svgs/SearchIcon";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center w-5/12  ">
      <input
        type="text"
        placeholder="Search"
        className="bg-gray-100 p-2 w-full outline-none rounded-l-lg"
      />
      <div className="text-gray-900  p-2 cursor-pointer bg-gray-100 rounded-r-lg ">
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchBar;
