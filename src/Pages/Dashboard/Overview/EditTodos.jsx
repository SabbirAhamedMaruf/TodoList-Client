import { useContext, useEffect, useState } from "react";
import edittodo from "../../../assets/edittodo.jpg";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useNavigate, useParams } from "react-router-dom";
import { NotificationContext } from "../../../Hooks/Notification";

const EditTodos = () => {
  const navigate = useNavigate();
  const { handleSuccessToast, handleErrorToast } =
    useContext(NotificationContext);
  const axiosPublic = useAxiosPublic();
  const params = useParams();
  console.log(params);
  const [currentTodoData, setCurrentTodoData] = useState([]);

  const handleUpdateTodoData = (e) => {
    e.preventDefault();
    const form = e.target;
    const taskName = form.name.value;
    const taskDescription = form.description.value;
    const taskpriority = form.priority.value;
    const taskDeadline = form.deadline.value;

    // making an object for data saving inside database
    const currentTaskData = {
      name: taskName,
      description: taskDescription,
      priority: taskpriority,
      deadline: taskDeadline,
    };

    axiosPublic
      .patch(`/updateSingleTodo?id=${params.id}`, currentTaskData)
      .then(() => {
        form.reset();
        navigate("/dashboard/overview/");
        handleSuccessToast("Todo updated successfully!");
      })
      .catch((error) => {
        handleErrorToast(
          "An error occured during updating todo. Error : ",
          error.message
        );
      });
  };

  useEffect(() => {
    axiosPublic
      .get(`/getSingleTodo?id=${params.id}`)
      .then((res) => setCurrentTodoData(res.data));
  }, [axiosPublic, params.id]);

  console.log(currentTodoData);

  return (
    <div className="p-2 lg:p-10 bg-green-50 h-screen">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:my-14">
        <div className="md:w-[60%] lg:w-1/2">
          <img src={edittodo} className="shadow-lg lg:shadow-xl rounded-lg" />
        </div>
        <div className="md:w-1/2 space-y-5">
          <h1 className="text-center font-bold text-xl lg:text-4xl">
            Edit Task
          </h1>
          <form
            onSubmit={handleUpdateTodoData}
            className="space-y-3 p-3 text-[12px] md:text-[15px]"
          >
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
              <label
                className="col-span-1 md:col-span-2 text-[15px] lg:text-xl font-semibold"
                htmlFor="name"
              >
                Name
              </label>
              <input
                defaultValue={currentTodoData.name}
                className="col-span-2 md:col-span-3 lg:col-span-5 px-2 py-2 bg-green-200 outline-none"
                type="text"
                name="name"
                placeholder="Enter task name"
                required
              />
            </div>

            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
              <label
                className="col-span-1 md:col-span-2 text-[15px] lg:text-xl font-semibold"
                htmlFor="description"
              >
                Description
              </label>
              <input
                defaultValue={currentTodoData.description}
                className="col-span-2 md:col-span-3 lg:col-span-5 px-2 py-2 bg-green-200 outline-none"
                type="text"
                name="description"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
              <label
                className="col-span-1 md:col-span-2 text-[15px] lg:text-xl font-semibold"
                htmlFor="priority"
              >
                Priority
              </label>
              <select
                value={currentTodoData.priority}
                className="col-span-2 md:col-span-3 lg:col-span-5 text-[12px] md:text-[15px] px-2 py-2 bg-green-200 outline-none"
                name="priority"
                required
              >
                <option value="none">Select Task Priority Level</option>
                <option value="3">High</option>
                <option value="2">Moderate</option>
                <option value="1">Low</option>
              </select>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
              <label
                className="col-span-1 md:col-span-2 text-[15px] lg:text-xl font-semibold"
                htmlFor="deadline"
              >
                Deadline
              </label>
              <input
                defaultValue={currentTodoData.deadline}
                className="col-span-2 md:col-span-3 lg:col-span-5 px-2 py-2 bg-green-200 outline-none"
                type="date"
                name="deadline"
                required
              />
            </div>

            <input
              className="w-full text-center text-xl text-white font-bold rounded-full py-1 lg:py-2 bg-green-500 transition-colors duration-700 hover:bg-[#fb9c00]"
              type="submit"
              value="Create"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTodos;
