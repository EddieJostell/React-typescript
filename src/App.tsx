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
import { myProjects, PortfolioItem, contactInfo, ContactItem} from "./portfolio";

interface State {
  navIsOpen: boolean;
  portCont: PortfolioItem[];
  contInf: ContactItem[];
}

export default class App extends React.Component<State> {
  state: State = {
    navIsOpen: false,
    portCont: myProjects,
    contInf: contactInfo,
  };

  toggleNav = (visible: boolean) => {
    this.setState({ navIsOpen: visible });
  };

  render() {
    const { navIsOpen } = this.state;
    const { portCont } = this.state;
    const { contInf } = this.state;
  
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
              <Route path="/Portfolio" render={() => <Portfolio data={portCont} />} />
              <Route path="/Contact"  render={() => <Contact contact={contInf} />}/>
          </Container>
        </div>
      </Router>
    );
  }
}

//https://coolors.co/000000-000a1c-13211a-44001d-ffffff
//https://coolors.co/44355b-31263e-221e22-ff4b3e-eca72c