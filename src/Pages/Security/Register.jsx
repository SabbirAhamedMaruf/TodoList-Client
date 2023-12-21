import { useContext, useState } from "react";
import registerlogo from "../../assets/register.jpg";
import Navbar from "../Shared/Navbar";
import { useNavigate } from "react-router-dom";
import { SecurityContext } from "../../Provider/SecurityProvider";
import axios from "axios";
import { NotificationContext } from "../../Hooks/Notification";
import RegisterForm from "./RegisterForm";

// Adding a generel instants for imgBB API for photo hosting
const imageHostingAPI = `https://api.imgbb.com/1/upload?key=${
  import.meta.env.VITE_IMGBBAPIKEY
}`;

const Register = () => {
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const {
    registerUserWithEmailAndPassword,
    handleUpdateUserPhoto,
    handleSignOut,
  } = useContext(SecurityContext);
  const { handleSuccessToast, handleErrorToast } =
    useContext(NotificationContext);

  // Handle password validation
  const handlePasswordValidation = (e) => {
    e.preventDefault();
    if (e.target.value.length === 0) {
      setError(null);
      setDisabled(true);
      return;
    } else if (e.target.value.length < 6) {
      setError("Password should be at least 6 character");
      setDisabled(true);
      return;
    } else if (!/[A-Z]/.test(e.target.value)) {
      setError("Password should contain at least one uppercase letter!");
      setDisabled(true);
      return;
    } else if (!/[$#&|@%*]/.test(e.target.value)) {
      setError("Password should contain at least one special letter!");
      setDisabled(true);
      return;
    } else {
      setError(null);
      setDisabled(false);
      return;
    }
  };

  // Create user using email and password function
  const createUserUsingEmailAndPassword = async (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.name.value;
    const useremail = form.email.value;
    const userpassword = form.password.value;

    // getting user photo
    const formData = new FormData();
    formData.append("image", form.photo.files[0]);
    // Hosting user photo inside imgbb
    const result = await axios.post(imageHostingAPI, formData);
    const userphoto = result.data.data.display_url;

    // Sending credential to firebase
    registerUserWithEmailAndPassword(useremail, userpassword)
      .then((res) => {
        // updating user name and photo
        handleUpdateUserPhoto(res.user, username, userphoto);
        handleSignOut();
        navigate("/login");
        handleSuccessToast("User created successfully!");
      })
      .catch((error) => {
        if (error.message.includes("auth/email-already-in-use")) {
          handleErrorToast("This email is already registerd!");
        } else {
          handleErrorToast(error.message);
        }
      });
  };

  return (
    <div className="lg:w-[90%] m-auto pt-3">
      <div className="w-[90%] lg:w-full m-auto">
        <Navbar />
      </div>
      <div className="lg:w-[90%] lg:m-auto bg-green-300 lg:bg-transparent flex flex-col lg:flex-row gap-10 lg:gap-20 items-center pb-10 lg:pb-0">
        <div className="lg:w-1/2 bg-white">
          <img src={registerlogo} className="px-10 lg:px-0" />
        </div>

        {/* Separated form of Register inside Register From Component */}
        <RegisterForm
          error={error}
          disabled={disabled}
          handlePasswordValidation={handlePasswordValidation}
          createUserUsingEmailAndPassword={createUserUsingEmailAndPassword}
        ></RegisterForm>
      </div>
    </div>
  );
};

export default Register;
