import { useState } from "react";
import { useContext } from "react";
import dateFromContext from "../../../context/dateFromContext";
import dateToContext from "../../../context/dateToContext";

const DatePicker = () => {
  const { setDateFrom } = useContext(dateFromContext);
  const { setDateTo } = useContext(dateToContext);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  //Todays Date
  var today = new Date().toLocaleDateString();

  return (
    <div className="flex justify-center items-center gap-3 flex-col m-5 ">
      <div className="flex justify-center items-center flex-col gap-2">
        <h4 className="text-slate-300  px-2">From:</h4>
        <input
          type="date"
          value={from}
          onChange={(e) => {
            setFrom(e.target.value);
            setDateFrom(e.target.valueAsNumber.toString().slice(0, 10));
          }}
          className="bg-gray-100 p-2 outline-none rounded-md  cursor-text  "
        />
      </div>
      <div className="flex justify-center items-center flex-col gap-2">
        <h4 className="text-slate-300 px-2">To:</h4>
        <input
          type="date"
          value={to}
          max={today}
          onChange={(e) => {
            setTo(e.target.value);
            setDateTo(e.target.valueAsNumber.toString().slice(0, 10));
          }}
          className="bg-gray-100 p-2 outline-none rounded-md  cursor-text "
        />
      </div>
    </div>
  );
};

export default DatePicker;
