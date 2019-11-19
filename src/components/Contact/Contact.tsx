import * as React from "react";
import "./Contact.less";
import { ContactItem } from "../../portfolio";
import ContactContent from "./ContactContent/ContactContent";


interface Props {
  contact: ContactItem[];
}

interface State {
  contactArray: ContactItem[];
}

export default class Contact extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      contactArray: [],
    };
  }

componentDidMount = () => {
  this.setState({ contactArray: this.props.contact });
}

  render() {
    const { contactArray } = this.state;
    const ContactInformation = contactArray.map((contact, key) => (
     <ContactContent key={key}
     medium={contact.medium}
     link={contact.link}
     img={contact.img}
     />
    ));

    return (
      <div className="Contact">
          <h1>CONTACT ME</h1>
          <ul className="List">
          {ContactInformation}
          </ul>
          
      </div>
    );
  }
}
