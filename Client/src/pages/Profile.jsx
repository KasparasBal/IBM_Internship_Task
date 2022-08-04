import { useRef, useState } from "react";
import Navbar2 from "../components/Navbar/Navbar2";

import useFetch from "../hooks/useFetch";

//Context
import { useContext } from "react";
import searchInputContext from "../context/searchInputContext";
import FromContext from "../context/FromContext";
import ToContext from "../context/ToContext";

// lightweight charts
import { createChart } from "lightweight-charts";

const Profile = () => {
  const { searchInput } = useContext(searchInputContext);
  const { From } = useContext(FromContext);
  const { To } = useContext(ToContext);

  console.log(To);
  console.log(From);
  console.log(searchInput);

  // Fetching the Chart Data

  const { data } = useFetch(
    `https://finnhub.io/api/v1/stock/candle?symbol=${searchInput}&resolution=D&from=${From}&to=${To}&token=cbkcu8aad3if45781mfg`
  );

  const { data: data2 } = useFetch(
    `https://finnhub.io/api/v1/stock/profile2?symbol=${searchInput}&token=cbkcu8aad3if45781mfg`
  );
  console.log(data2);
  console.log(searchInput);

  let array = [];
  if (data !== null) {
    for (let i = 0; i < Object.values(data)[0].length; i++) {
      array.push({
        open: data.o[i],
        close: data.c[i],
        high: data.h[i],
        low: data.l[i],
        time: data.t[i],
        value: data.v[i],
      });
    }
  }
  console.log(array);
  // //////////////////////////////////////////////////////////////////Test
  const divRef = useRef();

  // ///////////////////////////////////////////////////////////////// CHART

  setTimeout(() => {
    if (data !== null) {
      const chartOptions = {
        width: 1000,
        height: 600,
        layout: {
          textColor: "black",
          background: { type: "solid", color: "white" },
        },
      };
      const chart = createChart(divRef.current, chartOptions);
      const candlestickSeries = chart.addCandlestickSeries({
        upColor: "#26a69a",
        downColor: "#ef5350",
        borderVisible: false,
        wickUpColor: "#26a69a",
        wickDownColor: "#ef5350",
      });

      candlestickSeries.setData(array);

      chart.timeScale().fitContent();
    }
  }, 1000);
  // /////////////////////////////////////////////////////////////////////CHART

  return (
    <div>
      <Navbar2 />
      <div className="w-full h-full flex justify-center items-center m-10 gap-5">
        {data2 && (
          <div className=" bg-gray-900 p-5 w-2/12 text-slate-200  ">
            <h1 className="text-2xl py-2">Company Details:</h1>
            <div className="flex items-center justify-start">
              <h2 className="px-2 text-lg">Name:</h2>
              <h2>{data2.name}</h2>
            </div>
            <div className="flex items-center justify-start py-2">
              <h2 className="px-2 text-lg">Currency:</h2>
              <h2>{data2.currency}</h2>
            </div>
            <div className="flex items-center justify-start py-2">
              <h2 className="px-2 text-lg">Country:</h2>
              <h2>{data2.country}</h2>
            </div>
            <a
              href={data2.weburl}
              target="_blank"
              className="flex items-center justify-center py-2"
            >
              <button className="px-2 text-lg bg-sky-600 rounded-md p-2 w-8/12">
                Visit
              </button>
            </a>
          </div>
        )}

        <div>
          {data && (
            <div
              className=" w-12/12 h-10/12 flex items-center justify-center  grow shrink bg-gray-900 p-5"
              ref={divRef}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
