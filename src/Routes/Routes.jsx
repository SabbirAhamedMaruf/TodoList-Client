import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Security/Login"
import Register from "../Pages/Security/Register";
import Dashboard from "../Layouts/Dashboard";
import Overview from "../Pages/Dashboard/Overview/Overview";
import CreateTodo from "../Pages/Dashboard/CreateTodo/CreateTodo";
import ArrangeTodo from "../Pages/Dashboard/ArrangeTodo/ArrangeTodo";
import EditTodos from "../Pages/Dashboard/Overview/EditTodos";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Register/>
            }
        ]
    },
    {
        path:"/dashboard",
        element:<Dashboard/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/dashboard/overview/",
                element:<Overview/>
            },
            {
                path:"/dashboard/createtodo",
                element:<CreateTodo/>
            },
            {
                path:"/dashboard/arrangetodo",
                element:<ArrangeTodo/>
            },
            {
                path:"/dashboard/editTodo/:id",
                element:<EditTodos/>
            }
        ]
    }
])

export default routes;