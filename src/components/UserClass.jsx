import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    // super props is needed to access the props inside the constructor
    // as the component extends the React.Component class
    // in order to use this.props
    super(props);
    //contains all the state variables
    this.state = {
      count: 0,
      count2: 0,
    };
  }
  render() {
    return (
      <div className="user-card">
        <h1>
          Class Component {this.state.count} {this.state.count2}{" "}
        </h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
            // this.state.count = this.state.count + 1; won't work
            // this.state.count++; won't work
          }}
        >
          Increment Count
        </button>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: {this.props.location}</h3>
        <h2>Contact: 123456</h2>
      </div>
    );
  }
}

export default UserClass;
