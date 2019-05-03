import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Container from "./components/Container/Container";
import About from "./components/About/About";
import "./styles/app.less";

export default class App extends React.Component {
  state = {
    showHamburger: false,
    showCross: false
  };

  render() {
    return (
      <div>
        <Navigation name="Edward 'Eddie' Jostell" />
        <Container>
           <About/>
        </Container>
      </div>
    );
  }
}
