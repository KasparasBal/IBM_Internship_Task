import { useState } from "react";

const DatePicker = () => {
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center">
        <h4 className="text-slate-300  px-2">From:</h4>
        <input
          type="date"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="bg-gray-100 p-2 outline-none rounded-md cursor-pointer"
        />
      </div>
      <div className="flex justify-center items-center">
        <h4 className="text-slate-300 px-2">To:</h4>
        <input
          type="date"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="bg-gray-100 p-2 outline-none rounded-md cursor-pointer"
        />
      </div>
    </div>
  );
};

export default DatePicker;
