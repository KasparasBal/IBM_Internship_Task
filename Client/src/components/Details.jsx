const Details = (props) => {
  return (
    <div className=" bg-gray-900 p-5 w-12/12 text-slate-200  ">
      <h1 className="text-2xl py-2">Company Details:</h1>
      <div className="flex items-center justify-start">
        <h2 className="px-2 text-lg">Name:</h2>
        <h2>{props.data.name}</h2>
      </div>
      <div className="flex items-center justify-start py-2">
        <h2 className="px-2 text-lg">Currency:</h2>
        <h2>{props.data.currency}</h2>
      </div>
      <div className="flex items-center justify-start py-2">
        <h2 className="px-2 text-lg">Country:</h2>
        <h2>{props.data.country}</h2>
      </div>
      {props.data.weburl && (
        <a
          href={props.data.weburl}
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
  );
};

export default Details;
