import { useState } from "react";
import { useContext } from "react";
import dateFromContext from "../../../context/dateFromContext";
import dateToContext from "../../../context/dateToContext";

const DatePicker = () => {
  const { dateFrom, setDateFrom } = useContext(dateFromContext);
  const { dateTo, setDateTo } = useContext(dateToContext);

  return (
    <div className="flex justify-center items-center gap-3">
      <div className="flex justify-center items-center">
        <h4 className="text-slate-300  px-2">From:</h4>
        <input
          type="date"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
          className="bg-gray-100 p-2 outline-none rounded-md  cursor-text"
        />
      </div>
      <div className="flex justify-center items-center">
        <h4 className="text-slate-300 px-2">To:</h4>
        <input
          type="date"
          value={dateTo}
          onChange={async (e) => {
            setDateTo(e.target.value);
          }}
          className="bg-gray-100 p-2 outline-none rounded-md cursor-text"
        />
      </div>
    </div>
  );
};

export default DatePicker;
