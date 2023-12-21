import { Link } from "react-router-dom";
import login from "../../assets/Login.jpg";
import Navbar from "../Shared/Navbar";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { useContext } from "react";
import { SecurityContext } from "../../Provider/SecurityProvider";
import { NotificationContext } from "../../Hooks/Notification";

const Login = () => {
  const { loginUserUsingEmailAndPassword, loginWithGoogle, loginWithGithub } =
    useContext(SecurityContext);
  const { handleSuccessToast, handleErrorToast } =
    useContext(NotificationContext);

  // login users using email and password
  const handleEmailAndPasswordLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const useremail = form.email.value;
    const userpassword = form.password.value;

    // sending credential inside firebase
    loginUserUsingEmailAndPassword(useremail, userpassword)
      .then(() => {
        handleSuccessToast("User logged in successfully!");
        // TODO : User will redirect to dashboard
      })
      .catch((error) => {
        handleErrorToast(error.message);
      });
  };

  // login with google
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        handleSuccessToast("User logged in successfully!");
        // TODO : User will redirect to dashboard
      })
      .catch((error) => {
        handleErrorToast(error.message);
      });
  };

  // login with github
  const handleGithubLogin = () => {
    loginWithGithub()
      .then(() => {
        handleSuccessToast("User logged in successfully!");
        // TODO : User will redirect to dashboard
      })
      .catch((error) => {
        handleErrorToast(error.message);
      });
  };

  return (
    <div className="lg:w-[90%] m-auto pt-3">
      <div className="w-[90%] lg:w-full m-auto">
        <Navbar />
      </div>
      <div className="lg:w-[90%] lg:m-auto bg-green-300 lg:bg-transparent flex flex-col lg:flex-row gap-10 lg:gap-20 items-center pb-10 lg:pb-0">
        <div className="lg:w-1/2 bg-white">
          <img src={login} className="px-10 lg:px-0" />
        </div>
        <div className=" space-y-3">
          <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl mb-10">
            Login
          </h1>
          <form
            onSubmit={handleEmailAndPasswordLogin}
            className="flex flex-col space-y-8"
          >
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
          <div className="flex justify-center gap-5">
            <button
              onClick={handleGoogleLogin}
              className="w-[50%] py-1 lg:py-2 text-white text-xl bg-black lg:bg-green-500 transition-colors duration-700 rounded-md hover:bg-[#fb9c00]"
            >
              <FaGoogle className="inline" />
            </button>
            <button
              onClick={handleGithubLogin}
              className="w-[50%] py-1 lg:py-2 text-white text-xl bg-black lg:bg-green-500 transition-colors duration-700 rounded-md hover:bg-[#fb9c00]"
            >
              <FaGithub className="inline" />
            </button>
          </div>
          <div className="text-center space-y-3">
            <p>
              Not Registerd?{" "}
              <Link to="/register" className="font-bold hover:text-green-500">
                Click Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
