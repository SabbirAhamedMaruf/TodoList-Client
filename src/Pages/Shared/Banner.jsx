import desktopBanner from "../../assets/desktopbanner.jpg";
import button from "../../assets/button.gif";
import mobilebutton from "../../assets/mobilebutton.gif";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center">
      {/* Banner section for desktop */}
      <div className="hidden lg:block lg:w-2/3 space-y-10 lg:ml-24">
        <h1 className="lg:text-7xl font-semibold ">
          Your <span className="text-green-500">sucess</span>
          <br /> is one step away
        </h1>
        <h3 className="lg:text-xl lg:w-[85%]">
          Success is not just about reaching the top its about the journey the
          lessons learned and the growth experienced along the way.
        </h3>
        <Link className="relative">
          <img src={button} className="lg:w-44" />
          <button className="absolute top-[41%] left-[14%] font-semibold text-white">
            {"Let's Explore"}
          </button>
        </Link>
      </div>
      <div className="relative lg:static">
        <img src={desktopBanner} className="rounded-xl" />
        <div className="block lg:hidden absolute w-full h-full bg-black inset-0 opacity-50 rounded-xl"></div>
        {/* Banner section for mobile and tablet devices */}
        <div className="block lg:hidden absolute inset-0 text-center text-white space-y-8 mt-10 md:mt-20">
          <h1 className="text-4xl md:text-5xl font-semibold ">
            Your <span className="text-green-500">sucess</span>
            <br /> is one step away
          </h1>
          <h3 className="hidden  md:block w-[65%] mx-auto">
            Success is not just about reaching the top its about the journey the
            lessons learned and the growth experienced along the way.
          </h3>
          <button className="relative">
            <img src={mobilebutton} />
            <Link className="absolute inset-4 font-semibold text-white">
              {"Let's Explore"}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
