import Banner from "../Shared/Banner";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const Home = () => {
  return (
    <div className="pt-3">
      <div className="w-[90vw] m-auto">
        <Navbar />
        <Banner />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
