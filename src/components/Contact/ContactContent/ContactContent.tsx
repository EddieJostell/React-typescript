import * as React from "react";
import "../../Contact/Contact.less";

interface Props {
  medium: string;
  link: string;
  img: string;
}

const ContactContent = (props: Props) => {
  return (
    <li className="List-items">
      <div className="">
        <img src={props.img} />
      </div>
      <h3>{props.medium}</h3>
     <span>{props.link}</span>
    </li>
  );
};

export default ContactContent;
