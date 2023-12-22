import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { SecurityContext } from "../Provider/SecurityProvider";

const useFetchCompletedTask = () => {
  const { loading } = useContext(SecurityContext);
  const axiosPublic = useAxiosPublic();
  const {
    data: todosCompletedData = [],
    refetch,
    isPending: isTodoCompleteDataPending,
  } = useQuery({
    queryKey: ["todoCompletedData"],
    enabled: loading,
    queryFn: async () => {
      const res = await axiosPublic.get("/completedtask");
      return res.data;
    },
  });
  return [todosCompletedData, refetch, isTodoCompleteDataPending];
};

export default useFetchCompletedTask;
