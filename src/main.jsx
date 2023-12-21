import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import Notification from "./hooks/Notification";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Notification>
      <RouterProvider router={routes}/>
    </Notification>
  </React.StrictMode>
);
