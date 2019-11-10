import * as React from "react";
import "../../Portfolio/Portfolio.less";

function PortfolioContent(props: any) {
  return (
    <ul className="List">
    <li className="List-card">
      <div className="List-cardImg">
      <h3 className="title">{props.title}</h3>
      <img src={props.img}/>
      </div>
      <div className="List-cardContent">
      <h3 className="title">{props.title}</h3>
        <span>{props.tech}</span>
        <a href={props.link} target="_blank"><span>View project</span></a>
      </div>
       
    </li>
</ul>
  )
}

export default PortfolioContent;
