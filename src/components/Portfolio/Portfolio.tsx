import * as React from "react";
import "./Portfolio.less";
import PortfolioContent from "./PortfolioContent/PortfolioContent";
import { PortfolioItem } from "../../portfolio";


interface Props { 
  data: PortfolioItem[];
 
}

interface State {
  portArray: any[];
  
}

export default class Portfolio extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      portArray: [],
    };
  }

 componentDidMount() {
  this.setState({ portArray : this.props.data })
 }

  render() {
    const { portArray } = this.state;
  
    const portfolio = portArray.map((port, key) => <PortfolioContent 
      key={key}
      title={port.title}
      tech={port.tech}
      link={port.link}
      img={port.img}
    />);

    return (
      <div className="Portfolio">
        <h1>PROJECTS</h1>
        {portfolio }
      </div>
    );
  }
}
