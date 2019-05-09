import React from "react";

export default class Blog extends React.Component {
  componentDidMount() {
    document.title = "Blog Posts - PrivateBlog";
  }

  render() {
    return (
      <div>
        <h1>Blogs Page</h1>
        <p>BLOg</p>
        <p>BLOg</p>
        <p>BLOg</p>
        <p>BLOg</p>
      </div>
    );
  }
}
