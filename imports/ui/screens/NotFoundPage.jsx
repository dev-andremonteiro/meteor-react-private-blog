import React from "react";
import { Link } from "react-router-dom";

export default class NotFoundPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>404 - Page Not Found</h1>
        <p>We're unable to find that page.</p>
        <Link to="/" className="button button--link">
          Go to Home Page
        </Link>
      </div>
    );
  }
}
