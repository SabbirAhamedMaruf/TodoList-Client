import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useFetchTodos from "../../../Hooks/useFetchTodos";
import "../../../index.css";
import SingleTodoData from "./SingleTodoData";
import { NotificationContext } from "../../../Hooks/Notification";
const Overview = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [todos, setTodos] = useState([]);
  const [priority, setPriority] = useState("none");
  const { handleSuccessToast, handleErrorToast } =
    useContext(NotificationContext);
  const axiosPublic = useAxiosPublic();

  // getting total todos data
  const [todoData, refetch] = useFetchTodos();

  // Doing pagination
  let itemsperpage = 10;
  const numebrOfPages = Math.ceil(todoData.length / itemsperpage);
  const pages = [...Array(numebrOfPages).keys()];

  // setting catagory for fitering
  const handleChangePriority = (e) => {
    e.preventDefault();
    setPriority(e.target.value);
  };

  const handleDeleteTodo = (id) => {
    axiosPublic
      .delete(`/deletetodo?id=${id}`)
      .then((res) => {
        if (res.data.deletedCount === 1) {
          handleSuccessToast("Todo deleted successfully!");
          refetch();
        }
      })
      .catch((error) => {
        handleErrorToast("An error occured. Error: ", error.message);
      });
  };

  // fetching todos data by pagination
  useEffect(() => {
    axiosPublic
      .get(
        `/gettodobypagination?currentPage=${currentPage}&priority=${priority}`
      )
      .then((res) => setTodos(res.data));
  }, [axiosPublic, currentPage, priority]);

  return (
    <div className="p-10 bg-green-50 h-screen">
      <div className="my-5">
        <h1 className="text-center text-xl md:text-2xl lg:text-4xl font-semibold">
          Your Task
        </h1>
        <div className="flex flex-col">
          <div className="lg:h-[500px] md:w-[60vw]">
            {todos.length === 0 ? (
              <h1 className="text-xl md:text-2xl lg:text-3xl text-red-500 font-semibold text-center mt-60">
                No task found
              </h1>
            ) : (
              <div className="h-3/4 py-5 ">
                <form>
                  <div>
                    <label
                      className="ml-2 md:col-span-2 text-[15px] lg:text-xl font-semibold"
                      htmlFor="bloodgroup"
                    >
                      Sort By
                    </label>
                    <select
                      onChange={handleChangePriority}
                      className="ml-5 text-[12px] md:text-[15px] px-2 py-1 md:py-2 outline-none bg-green-200"
                      name="priority"
                      required
                    >
                      <option className="bg-green-200" value="none">
                        Select Task Priority Level
                      </option>
                      <option className="bg-green-200" value="3">
                        High
                      </option>
                      <option className="bg-green-200" value="2">
                        Moderate
                      </option>
                      <option className="bg-green-200" value="1">
                        Low
                      </option>
                    </select>
                  </div>
                </form>

                <div className="overflow-x-auto">
                  <table className="table  table-zebra space-y-5 md:text-[16px] lg:text-xl">
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>Task Name</th>
                        <th>Task Description</th>
                        <th>Priority</th>
                        <th>Deadline</th>
                        <th>Status</th>
                        <th>Edit</th>
                        <th>Delete Task</th>
                      </tr>
                    </thead>
                    <tbody>
                      {todos.map((i, index) => (
                        <SingleTodoData
                          key={i._id}
                          data={i}
                          number={index}
                          handleDeleteTodo={handleDeleteTodo}
                        ></SingleTodoData>
                      ))}
                    </tbody>
                    <tfoot>
                      <th>No.</th>
                      <th>Task Name</th>
                      <th>Task Description</th>
                      <th>Priority</th>
                      <th>Deadline</th>
                      <th>Status</th>
                      <th>Edit</th>
                      <th>Delete Task</th>
                    </tfoot>
                  </table>
                </div>
              </div>
            )}
          </div>
          <div className="row-span-1 relative">
            {/* pagination */}
            <div className="pagination  absolute top-[40vh] lg:top-[25vh]">
              <span className="text-xl font-semibold">Pages: </span>
              {pages.map((i, idx) => (
                <button
                  onClick={() => setCurrentPage(i)}
                  className={currentPage === i && "selected"}
                  // className="mr-5 px-3 py-1  text-white rounded-md"
                  key={idx}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
