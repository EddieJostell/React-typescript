import * as React from "react";
import "./Contact.less";

interface Props {}

interface State {}

export default class Contact extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Contact">
          <h1>CONTACT ME</h1>
          
      </div>
    );
  }
}
