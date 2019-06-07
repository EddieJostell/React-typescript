import React from "react";
import "./Navigation.less";

interface Props {
  name: string;
  navIsOpen: boolean;
  toggleNav: (visible: boolean) => void
  status?: string;
}

interface State {
  cross: boolean;
  hamburger: boolean;
  subnav: boolean;
}

export default class Navigation extends React.Component<Props, State> {
  static defaultProps = {
    status: "12315"
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      cross: false,
      hamburger: false,
      subnav: false
    };
  }

  render() {
    return (   
        <div className="Navbar">
          <div className="Navbar-name">
            <a>{this.props.name}</a>
          </div>
          <div className="Navbar-menu">
            {
              this.props.navIsOpen
              ? (
                <div onClick={() => this.props.toggleNav(false)}>
                  <img className="cross" src="../../../Icons/x.svg" />
                </div>
              ) : (
                <div onClick={() => this.props.toggleNav(true)}>
                  <img className="menu" src="../../../Icons/menu.svg" />
                </div>
              )
            }
          </div>

          {this.props.navIsOpen && (
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
    );
  }
}
