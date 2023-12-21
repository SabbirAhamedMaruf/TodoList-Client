import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const RegisterForm = ({
  error,
  disabled,
  handlePasswordValidation,
  createUserUsingEmailAndPassword,
}) => {
  return (
    <div className=" space-y-3">
      <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl mb-10">
        Register
      </h1>
      <form
        onSubmit={createUserUsingEmailAndPassword}
        className="flex flex-col space-y-8"
      >
        <div className="flex items-center gap-14">
          <label
            className="text-[15px] lg:text-xl font-semibold"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="w-[60vw] lg:w-[30vw] py-2 px-2 bg-green-100 rounded-md outline-none font-semibold"
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
            className="w-[60vw] lg:w-[30vw] py-1 px-2 bg-green-100 rounded-md outline-none font-semibold"
            type="file"
            name="photo"
            accept=".png, .jpg, .jpeg"
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
            className="w-[60vw] lg:w-[30vw] py-2 px-2 bg-green-100 rounded-md outline-none font-semibold"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex items-center gap-7 lg:gap-5">
          <label
            className={`text-[15px] lg:text-xl font-semibold ${
              error ? "mb-7" : "mb-0"
            }`}
            htmlFor="password"
          >
            Password
          </label>
          <div>
            <input
              onChange={handlePasswordValidation}
              className="w-[60vw] lg:w-[30vw] py-2 px-2 bg-green-100 rounded-md outline-none font-semibold"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <p className="mt-2">{error && error}</p>
          </div>
        </div>

        <input
          disabled={disabled}
          className="text-center text-xl text-white font-bold rounded-md  py-2 bg-black lg:bg-green-500 transition-colors duration-700 hover:bg-[#fb9c00] disabled:cursor-not-allowed"
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
      </div>
    </div>
  );
};

RegisterForm.propTypes = {
  error: PropTypes.string,
  disabled: PropTypes.bool,
  handlePasswordValidation: PropTypes.func,
  createUserUsingEmailAndPassword: PropTypes.func,
};

export default RegisterForm;
