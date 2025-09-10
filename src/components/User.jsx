import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
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
