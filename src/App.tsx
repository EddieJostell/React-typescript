import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Container from "./components/Container/Container";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import "./styles/app.less";

interface State {
  navIsOpen: boolean;
}

export default class App extends React.Component<{}, State> {
  state: State = {
    navIsOpen: false
  };

  toggleNav = (visible: boolean) => {
    this.setState({ navIsOpen: visible });
  };

  render() {
    const { navIsOpen } = this.state;

    return (
      <Router>
        <div className="App">
          <Navigation
            navIsOpen={navIsOpen}
            toggleNav={this.toggleNav}
            name="Edward 'Eddie' Jostell"
          />
          <Container>
            {/* <Home />
            <About /> */}
              <Route exact path="/" component={Home} />
              <Route path="/About" component={About} />

          </Container>
        </div>
      </Router>
    );
  }
}
