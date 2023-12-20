import Banner from "../Shared/Banner";
import Navbar from "../Shared/Navbar";

const Home = () => {
    return (
        <div className="w-[90vw] m-auto pt-3">
            <Navbar/>
            <Banner/>
        </div>
    );
};

export default Home;