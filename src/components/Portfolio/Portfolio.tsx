import React from 'react';
import './Portfolio.less';
import PortfolioContent from './PortfolioContent/PortfolioContent';
import { IPortfolioItem } from '../../utils/data';

interface IPortfolioProps {
  data: IPortfolioItem[];
}

const Portfolio = (props: IPortfolioProps) => {
  const { data } = props;

  const displayPortfolioData = () => {
    return data.map((port, key) => (
      <PortfolioContent
        key={key}
        title={port.title}
        tech={port.tech}
        link={port.link}
        img={port.img}
        text={port.text}
      />
    ));
  };

  return (
    <div className="Portfolio">
      <h1>PROJECTS</h1>
      <ul className="List">{displayPortfolioData()}</ul>
    </div>
  );
};

export default Portfolio;

/* interface Props {
  data: PortfolioItem[];
}

interface State {
  portArray: PortfolioItem[];
}

export default class Portfolio extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      portArray: this.props.data
    };
  }

  componentDidMount() {
    this.setState({ portArray: this.props.data });
  }

  render() {
    const { portArray } = this.state;

    const portfolio = portArray.map((port, key) => (
      <PortfolioContent
        key={key}
        title={port.title}
        tech={port.tech}
        link={port.link}
        img={port.img}
      />
    ));

    return (
      <div className="Portfolio">
        <h1>PROJECTS</h1>
        <ul className="List">{portfolio}</ul>
      </div>
    );
  }
}
 */
