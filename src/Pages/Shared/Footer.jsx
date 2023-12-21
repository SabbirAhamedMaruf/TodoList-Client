import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-[#18b985] text-white">
      <div className="space-y-2 md:space-y-3 lg:space-y-5">
        <h1 className="text-5xl font-bold">TodoList</h1>
        <p className="font-semibold text-[13px] md:text-[15px] lg:text-[17px] w-[65%] md:w-[60%] lg:w-[60%]">
          {
            "Crafting Moments, Conquering Goals. TodoList, Your Companion in Turning Dreams into Daily Achievements."
          }
        </p>
        <p className="font-semibold text-xl lg:text-2xl">Follow Us</p>
        <div className="flex gap-5 text-2xl">
          <Link to={import.meta.env.VITE_FACEBOOK}>
            <FaFacebookF />
          </Link>
          <Link to={import.meta.env.VITE_GITHUB}>
            <FaGithub />
          </Link>
          <Link to={import.meta.env.VITE_LINKEDIN}>
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
