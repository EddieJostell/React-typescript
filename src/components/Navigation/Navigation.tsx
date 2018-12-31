import React from "react";
import "./Navigation.less";

interface Props {
  name: string;
  hamburger: any;
  cross: any;
}

interface State {
  hamburger: any;
  cross: any;
  subnav: any;
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
      subnav: false,
    };
  }

  showCross = () => {
    console.log("123456");
    this.setState({cross: !this.state.cross, hamburger: !this.state.hamburger, subnav: !this.state.subnav});
  };

  showHamburger = () => {
    console.log("87654");
    this.setState({ hamburger: !this.state.hamburger, cross: !this.state.cross, subnav: !this.state.subnav });
  };

  render() {
    return (
      <div>
        <div className="Navbar">
          <div className="Navbar-name col-md-10">{this.props.name}</div>
          <div className="Navbar-menu col-md-2">
            {! this.state.hamburger ? (
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
         {!this.state.subnav ? null : <div className="Navbar-subnav">
            <li>ABOUT</li>
            <li>PERSONAL</li>
            <li>PORTFOLIO</li>
            <li>CONTACT</li>
          </div> } 
        </div>
      </div>
    );
  }
}
