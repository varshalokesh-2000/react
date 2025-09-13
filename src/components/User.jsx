import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);

  useEffect(async () => {
    const id = setInterval(() => console.log("interval"), 1000);
    console.log("componentDidMount inside useEffect");
    return () => {
      clearInterval(id);
      console.log("componentWillUnmount inside useEffect");
    };
  }, []);

  return (
    <div className="user-card">
      <h1>count {count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Bengaluru</h3>
      <h2>Contact: 123456</h2>
    </div>
  );
};

export default User;
