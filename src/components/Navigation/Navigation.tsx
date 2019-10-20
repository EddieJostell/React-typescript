import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.less";
import { runInThisContext } from "vm";

interface Props {
  name: string;
  navIsOpen: boolean;
  toggleNav: (visible: boolean) => void;
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
          {this.props.navIsOpen ? (
            <div onClick={() => this.props.toggleNav(false)}>
              <img className="cross" src="../../../Icons/x.svg" />
            </div>
          ) : (
            <div onClick={() => this.props.toggleNav(true)}>
              <img className="menu" src="../../../Icons/menu.svg" />
            </div>
          )}
        </div>

        {this.props.navIsOpen && (
          <div className="Navbar-subnav">
            <div className="Navbar-subnavItems">
              <li>
                <Link to={"/"} onClick={() => this.props.toggleNav(false)}>
                  {" "}
                  HOME{" "}
                </Link>
              </li>
              <li>
                <Link to={"/About"} onClick={() => this.props.toggleNav(false)}>
                  {" "}
                  ABOUT{" "}
                </Link>
              </li>
              <li>
                <Link
                  to={"/Portfolio"}
                  onClick={() => this.props.toggleNav(false)}
                >
                  {" "}
                  PORTFOLIO{" "}
                </Link>
              </li>
              <li>
                <Link
                  to={"/Contact"}
                  onClick={() => this.props.toggleNav(false)}
                >
                  {" "}
                  CONTACT{" "}
                </Link>
              </li>
            </div>
          </div>
        )}
      </div>
    );
  }
}
