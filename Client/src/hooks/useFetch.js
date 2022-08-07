import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const api = url;
      try {
        const result = await fetch(api);
        const getResult = await result.json();
        setData(getResult);
      } catch {
        throw error;
      }
    };
    fetchData();
  }, [url, error]);

  return {
    data,
    error,
  };
};

export default useFetch;
