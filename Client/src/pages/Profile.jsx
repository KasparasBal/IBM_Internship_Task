import { useEffect, useState } from "react";

import useFetch from "../hooks/useFetch";

//Context
import { useContext } from "react";
import searchInputContext from "../context/searchInputContext";
import dateFromContext from "../context/dateFromContext";
import dateToContext from "../context/dateToContext";

const Profile = () => {
  const { searchInput, setSearchInput } = useContext(searchInputContext);
  const { dateFrom, setDateFrom } = useContext(dateFromContext);
  const { dateTo, setDateTo } = useContext(dateToContext);

  //Fetching the Chart Data
  const { data, error, loading } = useFetch(
    `https://finnhub.io/api/v1/stock/candle?symbol=${searchInput}&resolution=D&from=${dateFrom}&to=${dateTo}&token=cbkcu8aad3if45781mfg`
  );

  return (
    <div className="flex items-center justify-center my-5 mx-auto w-10/12 h-screen">
      {data && { data }}
      {loading && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
      {error && (
        <div>
          <h1>{error}</h1>
        </div>
      )}
    </div>
  );
};

export default Profile;
