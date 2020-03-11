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
import {
  myProjects,
  PortfolioItem,
  QuoteItem,
  QuoteInfo
} from "./utils/portfolio";

interface State {
  navIsOpen: boolean;
  portCont: PortfolioItem[];
  quoteArr: QuoteItem[];
}

/* interface IAppProps {
  navIsOpen: boolean;
  portCont: PortfolioItem[];
  quoteList: QuoteItem[];
}

function App(props: IAppProps) {
  const { navIsOpen, portCont, quoteList } = props;
  const [stateNavIsOpen, setNavState] = useState(navIsOpen);

  const toggleNav = () => {
    console.log("Before", stateNavIsOpen);
    setNavState(!stateNavIsOpen);
    console.log("After", stateNavIsOpen);
  };

  return (
    <QuoteProvider value={quoteList}>
      <Router>
        <div className="App">
          <Navigation
            navIsOpen={stateNavIsOpen}
            toggleNav={toggleNav}
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

export default App; */

export default class App extends React.Component<State> {
  state: State = {
    navIsOpen: false,
    portCont: myProjects,
    quoteArr: QuoteInfo
  };

  toggleNav = (visible: boolean) => {
    console.log(visible);
    this.setState({ navIsOpen: visible });
  };

  render() {
    const { navIsOpen } = this.state;
    const { portCont } = this.state;
    const { quoteArr } = this.state;

    return (
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

//Använd för att lista ut components
/*    array.map(() => {
        <Route />
      }) */
