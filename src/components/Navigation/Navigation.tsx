import React from 'react';
import "./Navigation.less";

 interface Props {
    name: string,
    status?: string
}

interface State {
    hamburger: string,
    
}

export default class Navigation extends React.Component<Props, State> {

    static defaultProps = {
        status: "12315",

    }

    constructor(props: Props) {
        super(props);

        this.state = {
            hamburger: "123",
           
        }
    }
   

    render() {
        return <div>
            <div className="topMenu">
              <div>
                <span>{this.props.name}</span>
              </div>
              <div>
                <img className="menu" src="../../../Icons/menu.svg"/>
                <img className="cross" src="../../../Icons/x.svg" />
              </div>
            </div>
          </div>;
    }
 };