import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function useAxios(url) {
  const [data, setData] = useState([]);

  const addData = useCallback(async () => {
    try {
      const response = await axios.get(url);
      setData((prevData) => [...prevData, response.data]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [url]);

  useEffect(() => {
    addData();
  }, [addData, url]);

  return [data, addData];
}

export default useAxios;
