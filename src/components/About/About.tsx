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
        <div className="d-flex justify-content-center">
          <div className="Top col-6">
            <span className="intro">
              Hello! My name is Eddie and I am a Frontend-developer at
              Making Waves Sweden in Stockholm.
            </span>
            <span className="quote">
              "My family is everything. I am what I am thanks to my mother,
              my father, my brother, my sister... because they have given me
              everything. The education I have is thanks to them." -
              Ronaldinho.
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="Bot col-6">
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