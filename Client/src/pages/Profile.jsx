import { useEffect, useState } from "react";
import ProfileCard from "../components/Profile/ProfileCard";
import useFetch from "../hooks/useFetch";

const Profile = () => {
  const { data, error, loading } = useFetch(
    "https://finnhub.io/api/v1/stock/candle?symbol=AAPL&resolution=1&from=1631022248&to=1631627048&token=cbkcu8aad3if45781mfg"
  );
  console.log(data);
  return (
    <div className="flex items-center justify-center my-5 mx-auto w-10/12 h-screen">
      {data && <ProfileCard data={data}></ProfileCard>}
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
