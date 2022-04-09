import React from "react";

class Route extends React.Component {
  state = { currentPath: window.location.pathname };

  componentDidMount() {
    const onLocationChange = () => {
      this.setState({ currentPath: window.location.pathname });
    };
    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }

  render() {
    return this.state.currentPath === this.props.path
      ? this.props.children
      : null;
  }
}

export default Route;
