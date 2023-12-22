import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { SecurityContext } from "../Provider/SecurityProvider";

const useFetchTodos = () => {
  const { loading } = useContext(SecurityContext);
  const axiosPublic = useAxiosPublic();
  const {
    data: todosData = [],
    refetch,
    isPending: isTodoDataPending,
  } = useQuery({
    queryKey: ["todoData"],
    enabled: loading,
    queryFn: async () => {
      const res = await axiosPublic.get("/gettodo");
      return res.data;
    },
  });
  return [todosData, refetch, isTodoDataPending];
};

export default useFetchTodos;
