import { useState } from "react";

const useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const request = async () => {
    const res = await apiFunc();
    if (!res.ok) return setError(true);
    setError(false);
    setData(res.data);
  };

  return { request, data, error };
};

export default {
  useApi,
};
