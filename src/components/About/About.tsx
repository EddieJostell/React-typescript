import * as React from "react";
import "./About.less";

interface Props {}

interface State {}


export default class About extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="About">
        <div className="About-top">
          <div>
            <span>WELCOME TO MY PLACE!</span>
            <span>This is my personal page is about me and what I do.</span>
          </div>

          <div className="">
            <span>ABOUT ME!</span>
            <span>QUOTE</span>
          </div>
        </div>

        <div className="About-bottom">
          <div>
            <span>INFO TITLE</span>
          </div>
          <div>
            <div>INFO 1</div>
            <div>INFO 2</div>
            <div>INFO 3</div>
            <div>INFO 4</div>
          </div>
        </div>
      </div>
    );
  }
}
