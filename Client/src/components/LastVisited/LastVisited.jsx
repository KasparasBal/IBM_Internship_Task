const LastVisited = () => {
  return (
    <div className="w-full  shadow-blue-500/50 shadow-lg">
      {localStorage.getItem("name") && localStorage.getItem("dateFrom") && (
        <div className="text-gray-800  flex gap-5 items-center justify-between  text-md font-semibold p-3 rounded-md shadow-2xl shadow-blue-500/50  bg-gray-200  w-auto absolute top-40 left-5  z-10 ">
          <div>Last Search:</div>
          <div className="flex items-center justify-between gap-3">
            <div className="bg-sky-500 text-slate-200 p-3 rounded-md">
              {localStorage.getItem("name")}
            </div>
            <div className="bg-red-500 text-slate-200 p-3 rounded-md">
              {localStorage.getItem("symbol")}
            </div>
            <div> {localStorage.getItem("country")}</div>
            <div> {localStorage.getItem("currency")}</div>
            <div>{localStorage.getItem("weburl")}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LastVisited;
