import React from "react";
import "./Navigation.less";

interface Props {
  name: string;
}

interface State {
  hamburger: boolean;
  cross: boolean;
  subnav: boolean;
}

export default class Navigation extends React.Component<Props, State> {
  static defaultProps = {
    status: "12315"
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      hamburger: false,
      cross: false,
      subnav: false
    };
  }

  showCross = () => {
    this.setState({
      cross: !this.state.cross,
      hamburger: !this.state.hamburger,
      subnav: !this.state.subnav
    });
  };

  showHamburger = () => {
    this.setState({
      hamburger: !this.state.hamburger,
      cross: !this.state.cross,
      subnav: !this.state.subnav
    });
  };

  render() {
    return (
      <div>
        <div className="Navbar">
          <div className="Navbar-name">
            <a>{this.props.name}</a>
          </div>
          <div className="Navbar-menu">
            {!this.state.hamburger ? (
              <div onClick={this.showHamburger}>
                <img className="menu" src="../../../Icons/menu.svg" />
              </div>
            ) : null}
            {this.state.cross ? (
              <div onClick={this.showCross}>
                <img className="cross" src="../../../Icons/x.svg" />
              </div>
            ) : null}
          </div>

          {!this.state.subnav ? null : (
            <div className="Navbar-subnav">
              <div className="Navbar-subnavItems">
                <li>ABOUT</li>
                <li>PERSONAL</li>
                <li>PORTFOLIO</li>
                <li>CONTACT</li>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
