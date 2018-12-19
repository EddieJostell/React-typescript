import React from 'react';
import "./Navigation.less";

 interface Props {
    name: string,
    status?: string
}

interface State {
    hej: string
}

export default class Navigation extends React.Component<Props, State> {

    static defaultProps = {
        status: "12315",

    }

    constructor(props: Props) {
        super(props);

        this.state = {
            hej: "123"
        }
    }
   

    render() {
        return <div>
            <div className="topMenu">
              <div>
                <span>{this.props.name}</span>
              </div>
              <div>
                <span>{this.props.status}</span>
                    <span>{this.state.hej}</span>
              </div>
            </div>
          </div>;
    }
 };