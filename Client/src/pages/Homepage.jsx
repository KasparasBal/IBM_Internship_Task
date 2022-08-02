import HomeImg from "../Images/homeImg.jpg";
import LogoImg from "../components/Navbar/svgs/LogoIcon";

const Homepage = () => {
  return (
    <div
      style={{ backgroundImage: `url(${HomeImg})` }}
      className="bg-white bg-fixed bg-cover bg-center h-screen w-full flex items-center justify-center"
    >
      <h1 className="text-gray-800  tracking-wide text-6xl font-semibold p-10 rounded-md shadow-2xl shadow-blue-500/50  bg-gray-200">
        Stock Information
      </h1>
    </div>
  );
};

export default Homepage;
