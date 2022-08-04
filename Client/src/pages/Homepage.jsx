import HomeImg from "../Images/homeImg.jpg";
import Navbar from "../components/Navbar/Navbar";
import LastVisited from "../components/LastVisited/LastVisited";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <LastVisited />
      <div
        style={{ backgroundImage: `url(${HomeImg})` }}
        className="bg-white absolute top-0 z-0 bg-fixed bg-cover bg-center h-full w-full flex items-center justify-center"
      >
        <div className="bg-gray-900 rounded-md  shadow-blue-500/50 shadow-lg">
          <h1 className="text-slate-200 text-6xl p-10 ">Stock History</h1>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
