import { useQuery } from "react-query";

const useColleges = () => {
  const {
    refetch,
    data: colleges = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["colleges"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/colleges");
      return res.json();
    },
  });
  return {colleges, loading, refetch};
};

export default useColleges;
