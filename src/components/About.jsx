import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <div>
//       About
//       <User name={"Varsha (functional component)"} />
//       <UserClass name={"Varsha (class component)"} location={"Shivamoga"} />
//     </div>
//   );
// };

class About extends React.Component {
  constructor() {
    super();
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        About
        <User name={"Varsha (functional component)"} />
        <UserClass name={"Varsha"} location={"Shivamoga"} />
        <UserClass name={"test"} location={"Shivamoga"} />
      </div>
    );
  }
}

export default About;

{
  /* we think this is how it exceutes the life cycle methods - this is wrong 
  Parent Constructor
Parent Render
VarshaChild Constructor
VarshaChild Render
VarshaChild ComponentDidMount
testChild Constructor
testChild Render
testChild ComponentDidMount
Parent ComponentDidMount


this is the correct way - 
Parent Constructor
Parent Render

VarshaChild Constructor
VarshaChild Render

testChild Constructor
testChild Render

<DOM updated - In SINGLE BATCH>
VarshaChild ComponentDidMount
testChild ComponentDidMount

Parent ComponentDidMount


this happens because in react lifecycle is executed in 2 phases - 1. render phase (mounting - constructor and render) 2. commit phase (DOM operations and componentDidmount)

*/
}
