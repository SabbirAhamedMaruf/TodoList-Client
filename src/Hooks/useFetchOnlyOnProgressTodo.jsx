import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { SecurityContext } from "../Provider/SecurityProvider";

const useFetchOnlyOnProgressTodo = () => {
  const { loading } = useContext(SecurityContext);
  const axiosPublic = useAxiosPublic();
  const {
    data: todosOnProgressData = [],
    refetch,
    isPending: isTodoOnProgressDataPending,
  } = useQuery({
    queryKey: ["todoOnProgressData"],
    enabled: loading,
    queryFn: async () => {
      const res = await axiosPublic.get("/onprogesstodo");
      return res.data;
    },
  });
  return [todosOnProgressData, refetch, isTodoOnProgressDataPending];
};

export default useFetchOnlyOnProgressTodo;
