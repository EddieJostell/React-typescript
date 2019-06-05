import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Container from "./components/Container/Container";
import About from "./components/About/About";
import "./styles/app.less";

interface State {
  navIsOpen: boolean
}

export default class App extends React.Component<{}, State> {
  state: State = {
    navIsOpen: false
  };

  toggleNav = (visible: boolean) => {
    this.setState({ navIsOpen: visible })
  }

  render() {
    const { navIsOpen } = this.state

    return (
      <div>
        <Navigation
          navIsOpen={navIsOpen}
          toggleNav={this.toggleNav}
          name="Edward 'Eddie' Jostell"
          />
        <Container>
          <About />
        </Container>
      </div>
    );
  }
}
