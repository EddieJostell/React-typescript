import React from 'react';
import './Portfolio.less';
import { IPortfolioItem } from '../../utils/data';
import GridList from '@material-ui/core/GridList';
import { GridListTile, GridListTileBar } from '@material-ui/core';
import PortfolioContent from './PortfolioContent/PortfolioContent';
interface IPortfolioProps {
  data: IPortfolioItem[];
}

const Portfolio = (props: IPortfolioProps) => {
  const { data } = props;

  const displayPortfolioData = () => {
    /*     return data.map((mat, key) => (
      <GridListTile key={mat.img}>
        <img src={mat.img} alt={mat.title} />
        <GridListTileBar
          className="TileBar"
          title={
            <a href={mat.link} target="_blank">
              {mat.title}
            </a>
          }
          subtitle={<p>{mat.text}</p>}
        />
      </GridListTile>
    )); */

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
      {/*  <GridList cellHeight={260} cols={3}>
        {displayPortfolioData()}
      </GridList> */}
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
