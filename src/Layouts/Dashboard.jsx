import { NavLink, Outlet } from "react-router-dom";
import "../index.css";
const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row font-jost">
      <div className="md:w-[30%] lg:w-[20%]">
        <ul className="dashboard flex flex-col gap-3  text-center text-xl text-white bg-[#18b985] md:h-screen rounded-b-3xl md:rounded-none md:rounded-r-3xl pt-10 px-2">
          <h1 className="font-bold text-4xl mb-5">Todolist</h1>
          <NavLink to="/dashboard/Overview">
            <button className="w-full py-1 rounded-md text-black transition-all duration-300 hover:bg-white">
              Overview
            </button>
          </NavLink>
          <NavLink to="/dashboard/createtodo">
            <button className="w-full py-1 rounded-md text-black transition-all duration-300 hover:bg-white">
              Create Todos
            </button>
          </NavLink>
          <NavLink to="/dashboard/arrangetodo">
            <button className="w-full py-1 rounded-md text-black transition-all duration-300 hover:bg-white">
              Arrange Todos
            </button>
          </NavLink>
          <NavLink to="/">
            <button className="w-full py-1 rounded-md text-black transition-all duration-300 hover:bg-white">
              Home
            </button>
          </NavLink>
        </ul>
      </div>
      <div className="lg:w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
