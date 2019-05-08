import React from "react";

export default class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Users Page</h1>
        <p>user 1</p>
        <p>user 2</p>
        <p>user 3</p>
      </div>
    );
  }
}
