import { useEffect, useState } from "react";

export const useFetchData = (url : string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json)
        setData(json);
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false);
      }
    };

    fetchData()

  }, [url]);

  //return necessary data

  return { data, loading, error}
};