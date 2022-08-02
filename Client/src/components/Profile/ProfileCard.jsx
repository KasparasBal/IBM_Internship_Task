const ProfileCard = (props) => {
  return (
    <div className="flex  items-center flex-col bg-gray-900 w-12/12 h-full grow shrink rounded-md">
      <div className="flex items-center justify-between w-full p-10 bg-gray-500 rounded-t-md">
        <div className="p-2 text-slate-200">{props.data.name}</div>
        <div className="p-2 text-slate-200">{props.data.country}</div>
        <div className="p-2 text-slate-200">{props.data.currency}</div>
        <div className="p-2 text-slate-200">{props.data.weburl}</div>
      </div>
      <div>Company Stock Price History</div>
    </div>
  );
};

export default ProfileCard;
