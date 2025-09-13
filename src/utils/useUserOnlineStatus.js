import { useEffect, useState } from "react";
const useUserOnlineStatus = () => {
  const [userOnlineStatus, setUserOnlineStatus] = useState(true);
  //check if online
  useEffect(() => {
    window.addEventListener("offline", () => {
      setUserOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setUserOnlineStatus(true);
    });
  }, []);

  //boolean value
  return userOnlineStatus;
};

export default useUserOnlineStatus;

//we will use window object online property to check status
