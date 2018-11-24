import React from 'react';
import "./Navigation.less";

export interface NavigationProps {
    name: string,
    status: string
}

export default class Component extends React.Component<NavigationProps> {
    render() {
        return <div>
            <span className="hello"> {this.props.name} {this.props.status}</span>
          </div>;
    }
 };