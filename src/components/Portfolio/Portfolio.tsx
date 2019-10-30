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
    console.log(this.props.data);
    const portfolio = this.props.data.map( (port, key) => <PortfolioContent
       
   

    />)

    return (
      <div className="Portfolio">
        <h1>PROJECTS</h1>
      </div>
    );
  }
}
