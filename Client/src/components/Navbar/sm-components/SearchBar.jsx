import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import searchInputContext from "../../../context/searchInputContext";

const SearchBar = () => {
  const { setSearchInput } = useContext(searchInputContext);
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [hidden, setHidden] = useState(
    "text-gray-900 absolute top-12 w-full h-auto p-2 rounded-lg bg-gray-100 cursor-pointer  "
  );
  const [companyName, setCompanyName] = useState("hidden");

  //Fetch companies
  useEffect(() => {
    //Search by user input if char.length is not more than 35 and not less than 0.
    if (search.length < 35 && search.length !== 0) {
      fetch(
        `https://finnhub.io/api/v1/stock/profile2?symbol=${search}&token=cbkcu8aad3if45781mfg`
      )
        .then((res) => {
          //Validation for reaching the API Limit
          if (!res.ok) {
            throw Error("Too Many Requests! Please wait a couple of seconds");
          }
          setError("Too many requests!");
          return res.json();
        })
        .then((data) => {
          setData(data);
          if (Object.keys(data).length === 0) {
            //Validation for incorrect company symbol input
            setError("No such companies exist !");
          }
          if (Object.keys(data).length !== 0) {
            setError(null);
          }
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  }, [search]);

  const handleSelect = () => {
    //Set Previous Search Results
    localStorage.setItem("symbol", data.ticker);
    localStorage.setItem("name", data.name);
    localStorage.setItem("country", data.country);
    localStorage.setItem("currency", data.currency);
    localStorage.setItem("weburl", data.weburl);
    setSearchInput(data.ticker);
    setHidden("hidden");
    setCompanyName(
      "bg-gray-100 p-2 outline-none rounded-r-lg border-l-2 border-sky-400 absolute right-0 "
    );
  };

  return (
    <div className="flex justify-center items-center w-5/12 relative  ">
      <input
        type="text"
        placeholder="Search By Company Symbol"
        className="bg-gray-100 p-2 w-full outline-none rounded-lg "
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setHidden(
            "text-gray-900 absolute top-12 w-full h-auto p-2 rounded-lg bg-gray-100 cursor-pointer "
          );
          setCompanyName("hidden");
        }}
      />
      {data && search.length !== 0 && Object.keys(data).length !== 0 && (
        <div onClick={handleSelect} className={hidden}>
          <div className="flex items-center justify-between">
            <div className="bg-blue-500 text-slate-200 text-xl p-2 rounded-lg justify-center items-center ">
              {data.name}
            </div>
            <div className="text-lg p-2 ">{data.country}</div>
            <div className="text-lg p-2">{data.currency}</div>
            <div className="text-lg p-2">{data.weburl}</div>
          </div>
        </div>
      )}
      {error && search.length !== 0 && (
        <div className=" bg-slate-100 border border-red-700 text-red-700 absolute -top-9 left-0 p-1 w-5/5 rounded-md text-d">
          {error}
        </div>
      )}
      {data && search.length !== 0 && Object.keys(data).length !== 0 && (
        <div className={companyName}>{data.name}</div>
      )}
    </div>
  );
};

export default SearchBar;
