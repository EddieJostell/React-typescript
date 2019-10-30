import * as React from "react";
import "./Portfolio.less";
import PortfolioContent from "./PortfolioContent/PortfolioContent";

interface Props {
  data: [];
  title: string;
  tech: string;
  id: number;
  link: string;
}

interface State {}

export default class Portfolio extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  // componentDidMount() {
  //   this.setState({ portfolio: data })
  // }
  render() {
    //const { data } = this.props;
    console.log(this.props.data, "ASDF");
    const portfolio = this.props.data.map((port, key) => <PortfolioContent 
   
    />);

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
            <a href="">
              <span>View project</span>
            </a>
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
