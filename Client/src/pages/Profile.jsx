import { useRef } from "react";
//components
import Navbar2 from "../components/Navbar/Navbar2";
import Details from "../components/Details";
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

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

const Profile = () => {
  //global states
  const { searchInput } = useContext(searchInputContext);
  const { From } = useContext(FromContext);
  const { To } = useContext(ToContext);
  const { executed, setExecuted } = useContext(executedContext);
  const { posted, setPosted } = useContext(postedContext);

  // // Fetching Chart Data
  const { data, error } = useFetch(
    `https://finnhub.io/api/v1/stock/candle?symbol=${searchInput}&resolution=D&from=${From}&to=${To}&token=cbkcu8aad3if45781mfg`
  );
  //Fetching Company Data
  const { data: data2, error: error2 } = useFetch(
    `https://finnhub.io/api/v1/stock/profile2?symbol=${searchInput}&token=cbkcu8aad3if45781mfg`
  );

  //Looping Through Stock Data
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

  // Referencing Div For lightweight-charts
  const divRef = useRef();

  // Chart
  //Timeout 1s for chart to load
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

  /////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div>
      <Navbar2 />
      <div className="w-full h-full flex justify-center flex-col items-center bg-gray-900  gap-5">
        {error2 && <div>{error2}</div>}
        {data2 && <Details data={data2} />}

        <div className="w-screen h-5/6 flex items-center p-20 ">
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
