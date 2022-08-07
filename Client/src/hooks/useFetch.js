// import { useState, useEffect } from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch(url)
//       .then((res) => {
//         if (!res.ok) {
//           throw Error("OOPS! something went wrong!");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setData(data);
//         setLoading(false);
//         setError(null);
//       })
//       .catch((err) => {
//         setLoading(false);
//         setError(err.message);
//       });
//   }, [url]);
//   return {
//     data,
//     loading,
//     error,
//   };
// };

// export default useFetch;

import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [url]);

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

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
