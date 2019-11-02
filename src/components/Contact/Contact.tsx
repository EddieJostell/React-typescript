import * as React from "react";
import "./Contact.less";
import { ContactItem } from "../../portfolio";

interface Props {
  contact: ContactItem[];
}

interface State {}

export default class Contact extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    const { contact } = this.props;
    const ContactInformation = contact.map( (contact, key ) => {
  
    })

    return (
      <div className="Contact">
          <h1>CONTACT ME</h1>
          
      </div>
    );
  }
}
