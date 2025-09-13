import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "Name here",
        location: "Location here",
      },
    };
  }

  async componentDidMount() {
    const res = await fetch("https://api.github.com/users/VarshaML");
    const json = await res.json();
    this.setState({ userInfo: json });
    console.log("componentDidMount");
    this.timer = setInterval(() => console.log("interval"), 1000);
  }

  // called immediately after a component is inserted into the DOM
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  // called before a component is removed from the DOM
  componentWillUnmount() {
    console.log("componentWillUnmount");
    //clear interval
    clearInterval(this.timer);
  }

  render() {
    const { login, name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {login}</h2>
        <h3>Location: {this.props.location}</h3>
        <h2>Contact: 123456</h2>
        <img src={avatar_url} alt={name} height={80} width={80} />
      </div>
    );
  }
}

export default UserClass;
