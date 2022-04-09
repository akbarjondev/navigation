import React from "react";
import Dropdown from "./Dropdown";
import Header from "./Header";
import Route from "./Route";
import Search from "./Search";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Navigations</h1>
        <Header />
        <hr />
        <Route path={"/dropdown"}>
          <Dropdown />
        </Route>
        <Route path={"/search"}>
          <Search />
        </Route>
      </>
    );
  }
}

export default App;
