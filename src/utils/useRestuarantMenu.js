import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestuarantMenu = (restId) => {
  const [restInfo, setRestInfo] = useState(null);
  //fetchData

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + restId);
    const json = await data.json();
    setRestInfo(json);
  };

  return restInfo;
};

export default useRestuarantMenu;
