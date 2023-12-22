import { useDrop } from "react-dnd";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useFetchOnlyOnProgressTodo from "../../../Hooks/useFetchOnlyOnProgressTodo";
import SingleArrangeTodoData from "./SingleArrangeTodoData";
import { useContext } from "react";
import { NotificationContext } from "../../../Hooks/Notification";
import useFetchTodos from "../../../Hooks/useFetchTodos";
import useFetchCompletedTask from "../../../Hooks/useFetchCompletedTask";

const CompleteTask = () => {
  const [todosCompletedData, refetch] = useFetchCompletedTask();
  const [,refetchProgressTodo]=useFetchOnlyOnProgressTodo();
  const [, refetchTodos] = useFetchTodos();



  const { handleSuccessToast, handleErrorToast } =
    useContext(NotificationContext);
  const axiosPublic = useAxiosPublic();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => handleAddtoBorad(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const handleAddtoBorad = (id) => {
    axiosPublic
      .patch(`/updateStatus?id=${id}&status=${"completed"}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          handleSuccessToast("Task status updated successfully!");
          refetch();
          refetchProgressTodo();
          refetchTodos();
        } else {
          handleErrorToast("An error occured during updating status!");
        }
      });
  };

  return (
    <div className="w-[20vw] bg-green-100 shadow-xl rounded-e-md text-center pt-5">
      <h1 className="font-semibold text-2xl">In Progress</h1>
      <div
        ref={drop}
        className="h-[70vh] p-10 mb-10 space-y-3 overflow-y-scroll"
      >
        {todosCompletedData.map((todo) => (
          <SingleArrangeTodoData
            key={todo._id}
            data={todo}
          ></SingleArrangeTodoData>
        ))}
      </div>
    </div>
  );
};

export default CompleteTask;
