import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Container from "./components/Container/Container";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import "./styles/app.less";
import Portfolio from "./components/Portfolio/Portfolio";
//import Route from "./utils/Route";
import Contact from "./components/Contact/Contact";
import { QuoteProvider } from "./utils/HelperContext";
import { myProjects, PortfolioItem, QuoteItem, quoteInfo } from "./utils/portfolio";

interface State {
  navIsOpen: boolean;
  portCont: PortfolioItem[];
  quoteArr: QuoteItem[];
 
}

export default class App extends React.Component<State> {
  state: State = {
    navIsOpen: false,
    portCont: myProjects,
    quoteArr: quoteInfo,
  };

  toggleNav = (visible: boolean) => {
    this.setState({ navIsOpen: visible });
  };

  render() {
    const { navIsOpen } = this.state;
    const { portCont } = this.state;
    const { quoteArr } = this.state;

    return (
      /*    array.map(() => {
        <Route />
      }) */

      <QuoteProvider value={quoteArr}>
        <Router>
          <div className="App">
            <Navigation
              navIsOpen={navIsOpen}
              toggleNav={this.toggleNav}
              name="Edward 'Eddie' Jostell"
            />
            <Container>
              <Route exact path="/" component={Home} />
              <Route path="/About" render={() => <About />} />
              <Route
                path="/Portfolio"
                render={() => <Portfolio data={portCont} />}
              />
              <Route path="/Contact" render={() => <Contact />} />
            </Container>
          </div>
        </Router>
      </QuoteProvider>
    );
  }
}

//https://coolors.co/000000-000a1c-13211a-44001d-ffffff
//https://coolors.co/44355b-31263e-221e22-ff4b3e-eca72c

//https://coolors.co/f26326-000000-ffffff-4a5664-fc0000
//https://coolors.co/a30002-000000-eaeaea-466365-274060
