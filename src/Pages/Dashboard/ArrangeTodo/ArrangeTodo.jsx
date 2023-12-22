import useFetchTodos from "../../../Hooks/useFetchTodos";
import CompleteTask from "./CompleteTask";
import OnProgress from "./OnProgress";
import SingleArrangeTodoData from "./SingleArrangeTodoData";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ArrangeTodo = () => {
  const [todosData] = useFetchTodos();
  return (
    <div className="p-2 lg:p-10 bg-green-50 h-screen">
      <h1 className="text-center text-xl md:text-2xl lg:text-4xl font-semibold">
        Arrange Task
      </h1>

      <DndProvider backend={HTML5Backend}>
        <div className="flex flex-col lg:flex-row justify-around items-center gap-10 lg:my-5">
          <div className=" w-[20vw] bg-green-100 shadow-xl rounded-e-md text-center pt-5 ">
            <h1 className="font-semibold text-2xl">Todo</h1>
            <div className="h-[70vh] p-10 mb-10 space-y-3 overflow-y-scroll">
              {todosData.map((todo) => (
                <SingleArrangeTodoData
                  key={todo._id}
                  data={todo}
                ></SingleArrangeTodoData>
              ))}
            </div>
          </div>
          <OnProgress />
          <CompleteTask />
        </div>
      </DndProvider>
    </div>
  );
};

export default ArrangeTodo;
