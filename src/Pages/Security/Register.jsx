import { useState } from "react";
import registerlogo from "../../assets/register.jpg";
import Navbar from "../Shared/Navbar";
import { Link } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");

  return (
    <div className="lg:w-[90%] m-auto pt-3">
      <div className="w-[90%] lg:w-full m-auto">
        <Navbar />
      </div>
      <div className="lg:w-[90%] lg:m-auto bg-green-300 lg:bg-transparent flex flex-col lg:flex-row gap-10 lg:gap-20 items-center pb-10 lg:pb-0">
        <div className="lg:w-1/2 bg-white">
          <img src={registerlogo} className="px-10 lg:px-0" />
        </div>
        <div className=" space-y-3">
          <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl mb-10">
            Register
          </h1>
          <form className="flex flex-col space-y-8">
            <div className="flex items-center gap-14">
              <label
                className="text-[15px] lg:text-xl font-semibold"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-[60vw] lg:w-[30vw] py-2 px-2 bg-green-100 rounded-md outline-none"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex items-center gap-14">
              <label
                className="text-[15px] lg:text-xl font-semibold"
                htmlFor="photo"
              >
                Photo
              </label>
              <input
                className="w-[60vw] lg:w-[30vw] py-1 px-2 bg-green-100 rounded-md outline-none"
                type="file"
                name="photo"
              />
            </div>
            <div className="flex items-center gap-14">
              <label
                className="text-[15px] lg:text-xl font-semibold"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-[60vw] lg:w-[30vw] py-2 px-2 bg-green-100 rounded-md outline-none"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex items-center gap-7 lg:gap-5">
              <label
                className="text-[15px] lg:text-xl font-semibold"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-[60vw] lg:w-[30vw] py-2 px-2 bg-green-100 rounded-md outline-none"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>

            <input
              className="text-center text-xl text-white font-bold rounded-md  py-2 bg-black lg:bg-green-500 transition-colors duration-700 hover:bg-[#fb9c00]"
              type="submit"
              value="Submit"
            />
          </form>
          <div className="text-center space-y-3">
            <p>
              Alredy Registerd?{" "}
              <Link to="/login" className="font-bold hover:text-green-500">
                Click Here
              </Link>
            </p>
            <p>Error message goes here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
