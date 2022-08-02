const DatePicker = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center">
        <h4 className="text-slate-300  px-2">From:</h4>
        <input
          type="date"
          className="bg-gray-100 p-2 outline-none rounded-md"
        />
      </div>
      <div className="flex justify-center items-center">
        <h4 className="text-slate-300 px-2">To:</h4>
        <input
          type="date"
          className="bg-gray-100 p-2 outline-none rounded-md"
        />
      </div>
    </div>
  );
};

export default DatePicker;
