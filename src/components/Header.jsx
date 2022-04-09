import React from "react";
import Link from "./Link";

class Header extends React.Component {
  render() {
    return (
      <header>
        <Link class={"nagigate link"} href={"/search"}>
          Search
        </Link>
        <Link class={"nagigate link"} href={"/dropdown"}>
          Dropdown
        </Link>
      </header>
    );
  }
}

export default Header;
