import * as React from "react";
import "./Home.less";

interface Props {}

interface State {}

export default class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Home">
        <div className="d-flex justify-content-center">
          <div className="Home-content col-6">
            <span className="Home-contentTitle">WELCOME TO MY PLACE!</span>
            <span className="Home-contentText">This is my personal page is about me and what I do.</span>
          </div>
        </div>
      </div>
    );
  }
}
