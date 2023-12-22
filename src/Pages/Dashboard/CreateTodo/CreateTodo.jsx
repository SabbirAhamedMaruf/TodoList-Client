import { useContext } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import todo from "../../../assets/todo.jpg";
import CreateTodoForm from "./CreateTodoForm";
import { NotificationContext } from "../../../Hooks/Notification";

const CreateTodo = () => {
  const { handleSuccessToast, handleErrorToast } =
    useContext(NotificationContext);
  const axiosPublic = useAxiosPublic();
  // adding todos
  const handleAddTodos = (e) => {
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
      status: "created",
    };

    axiosPublic
      .post("/addtodo", currentTaskData)
      .then(() => {
        // form.reset();
        handleSuccessToast("Todo addded successfully!");
      })
      .catch((error) => {
        handleErrorToast(
          "An error occured during adding todo. Error : ",
          error.message
        );
      });
  };

  return (
    <div className="p-2 lg:p-10 bg-green-50 h-screen">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:my-14">
        <div className="md:w-[60%] lg:w-1/2">
          <img src={todo} className="shadow-lg lg:shadow-xl rounded-lg" />
        </div>
        <CreateTodoForm handleAddTodos={handleAddTodos}></CreateTodoForm>
      </div>
    </div>
  );
};

export default CreateTodo;
