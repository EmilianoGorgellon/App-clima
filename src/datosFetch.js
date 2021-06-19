import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();    
    setData(data);
  }

  useEffect(() => {
    getData();
     // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, []);

  return data;
}
