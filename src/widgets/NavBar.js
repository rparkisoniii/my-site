import React, { Component, PropTypes } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false
    };
  }
  render() {
    return (
      <nav className="nav">
        <div className="container">
          <div className="nav-left">
            <Link
              to="/"
              className="nav-item"
              style={{
                fontWeight: "900",
                fontSize: 30,
                color: "#222"
              }}
            >
              <h1>Ralph Parkison</h1>
            </Link>
          </div>
          <span
            className={classnames(
              "nav-toggle",
              this.state.toggled ? "is-active" : ""
            )}
            onClick={() => this.setState({ toggled: !this.state.toggled })}
          >
            <span />
            <span />
            <span />
          </span>
          <div
            className={classnames(
              "nav-right",
              "nav-menu",
              this.state.toggled ? "is-active" : ""
            )}
          >
            <Link
              onClick={() => this.setState({ toggled: !this.state.toggled })}
              to="/"
              className={classnames(
                "nav-item",
                "is-tab",
                this.props.location.pathname === "/" ? "is-active" : ""
              )}
            >
              About
            </Link>
            <Link
              onClick={() => this.setState({ toggled: !this.state.toggled })}
              to="/contact/"
              className={classnames(
                "nav-item",
                "is-tab",
                this.props.location.pathname === "/contact/" ? "is-active" : ""
              )}
            >
              Contact
            </Link>
            <Link
              onClick={() => this.setState({ toggled: !this.state.toggled })}
              to="/coding/"
              className={classnames(
                "nav-item",
                "is-tab",
                this.props.location.pathname === "/coding/" ? "is-active" : ""
              )}
            >
              Editor
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

NavBar.propTypes = {
  location: PropTypes.object.isRequired
};

export default withRouter(NavBar);
