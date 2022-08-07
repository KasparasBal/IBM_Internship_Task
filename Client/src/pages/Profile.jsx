import { useRef } from "react";
//components
import Navbar2 from "../components/Navbar/Navbar2";
//hooks
import useFetch from "../hooks/useFetch";

//Context
import { useContext } from "react";
import searchInputContext from "../context/searchInputContext";
import FromContext from "../context/FromContext";
import ToContext from "../context/ToContext";
import executedContext from "../context/executedContext";
import postedContext from "../context/postedContext";
// lightweight charts
import { createChart } from "lightweight-charts";

const Profile = () => {
  const { searchInput } = useContext(searchInputContext);
  const { From } = useContext(FromContext);
  const { To } = useContext(ToContext);
  const { executed, setExecuted } = useContext(executedContext);
  const { posted, setPosted } = useContext(postedContext);

  // Fetching the Chart Data

  const { data, error } = useFetch(
    `https://finnhub.io/api/v1/stock/candle?symbol=${searchInput}&resolution=D&from=${From}&to=${To}&token=cbkcu8aad3if45781mfg`
  );

  const { data: data2, error: error2 } = useFetch(
    `https://finnhub.io/api/v1/stock/profile2?symbol=${searchInput}&token=cbkcu8aad3if45781mfg`
  );

  /////////
  //Looping through stock data
  let array = [];
  if (data !== null && executed !== true) {
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
    setExecuted(true);
  }

  // referencing div for lightweight-charts
  const divRef = useRef();

  // CHART
  //Timeout set to let the fetch get data before rendering the data
  setTimeout(() => {
    if (data !== null && executed !== true) {
      const chartOptions = {
        width: divRef.current.clientWidth,
        height: divRef.current.clientHeight,
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
  //
  //Posting to Backend

  if (data2 !== null && data !== null && posted !== true) {
    const userData = {
      company: data2.name,
      stocks: data,
    };
    fetch("http://localhost:3050", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        if (!res.ok) {
          throw error;
        }
      })
      .then(setPosted(true))
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Navbar2 />
      <div className="w-full h-full flex justify-center flex-col items-center bg-gray-900  gap-5">
        {error2 && <div>{error2}</div>}
        {data2 && (
          <div className=" bg-gray-900 p-5 w-12/12 text-slate-200  ">
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
            {data2.weburl && (
              <a
                href={data2.weburl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center py-2"
              >
                <button className="px-2 text-lg bg-sky-600 rounded-md p-2 w-8/12">
                  Visit
                </button>
              </a>
            )}
          </div>
        )}

        <div className="w-screen h-5/6 flex items-center p-10">
          {error && <div>{error}</div>}
          {data && (
            <div
              id="candlestick_graph"
              className={
                "w-1/2 h-screen flex items-center justify-center  grow shrink bg-gray-900"
              }
              ref={divRef}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
