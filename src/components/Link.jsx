import React from "react";

class Link extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    window.history.pushState({}, "", this.props.href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  }

  render() {
    return (
      <a
        href={this.props.href}
        onClick={this.onClick}
        className={this.props.class}
      >
        {this.props.children}
      </a>
    );
  }
}

export default Link;
