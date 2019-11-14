import * as React from "react";
import "../../Contact/Contact.less";
import { useState } from 'react';

interface Props {

}

function ContactContent(props: Props) {

const [cont, contactInfo] = useState([])

const getContactInfo = () => {

}

  return (
    <ul className="List">
    <li className="List-items">
      <div className="">
      <img src=""/>
      </div>
      <div className="">
      <h3></h3>
        <span></span>
        <a href="" target="_blank"><span>View project</span></a>
      </div>
       
    </li>
</ul>
  )
}

export default ContactContent;