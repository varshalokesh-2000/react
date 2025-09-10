import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      About
      <User name={"Varsha (functional component)"} />
      <UserClass name={"Varsha (class component)"} location={"Shivamoga"} />
    </div>
  );
};

export default About;
