import * as React from "react";
import "./Portfolio.less";

interface Props {}

interface State {}

export default class Portfolio extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Portfolio">
          <h1>PROJECTS</h1>
          <ul className="List">
              <li className="List-card">
                  <h3>CLOUD 9 REBORN</h3>
                  <span>
                    Made up homepage for the Cloud9 CSGO team from 2016 to 2017.
                  </span>
                  <span>#HTML #CSS/SASS #Javascript</span>
                  <a href=""><span>View project</span></a>
              </li>
              <li className="List-card">TODO</li>
              <li className="List-card">FOOD-APP</li>
              <li className="List-card">NEWS HUB</li>
              <li className="List-card">MOVIEDATABASE</li>
              <li className="List-card">FOOD-APP</li>
              <li className="List-card">FOOD-APP</li>
              <li className="List-card">FOOD-APP</li>
          </ul>
      </div>
    );
  }
}
