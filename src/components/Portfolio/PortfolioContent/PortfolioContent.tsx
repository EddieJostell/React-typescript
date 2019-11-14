import * as React from "react";
import "../../Portfolio/Portfolio.less";

interface Props {
  link: string;
  img: string;
  title: string;
  tech: string;
}

function PortfolioContent(props: Props) {
  return (
    <li className="List-card">
      <div className="List-cardImg">
        <h3 className="title">{props.title}</h3>
        <a href={props.link} target="_blank">
          <img src={props.img} />
        </a>
      </div>
      <div className="List-cardContent">
        <h3 className="title">{props.title}</h3>
        <span>{props.tech}</span>
        <a href={props.link} target="_blank">
          <div>{props.link}</div>
        </a>
      </div>
    </li>
  );
}

export default PortfolioContent;
