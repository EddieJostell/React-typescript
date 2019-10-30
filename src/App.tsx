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
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
const data = require("./portfolio.json");

interface State {
  navIsOpen: boolean;
  portCont: [];
}

interface Props {
  
}

export default class App extends React.Component<{}, State> {
  state: State = {
    navIsOpen: false,
    portCont: data,
  };

  toggleNav = (visible: boolean) => {
    this.setState({ navIsOpen: visible });
  };

  render() {
    const { navIsOpen } = this.state;
    const { portCont } = this.state;
    console.log(this.state.portCont, "from App.tsx");

    return (
      <Router>
        <div className="App">
          <Navigation
            navIsOpen={navIsOpen}
            toggleNav={this.toggleNav}
            name="Edward 'Eddie' Jostell"
          />
          <Container>
              <Route exact path="/" component={Home} />
              <Route path="/About" component={About} />
              <Route path="/Portfolio" render={(props) => <Portfolio data={portCont} />} />
              <Route path="/Contact"  compontent={Contact}/>
          </Container>
        </div>
      </Router>
    );
  }
}
