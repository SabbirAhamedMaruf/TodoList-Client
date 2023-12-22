import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import Notification from "./Hooks/Notification";
import SecurityProvider from "./Provider/SecurityProvider";
// TanStack Query Imports
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Notification>
        <SecurityProvider>
          <RouterProvider router={routes} />
        </SecurityProvider>
      </Notification>
    </QueryClientProvider>
  </React.StrictMode>
);
