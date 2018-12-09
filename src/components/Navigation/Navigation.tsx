import React from 'react';
import "./Navigation.less";

export interface NavigationProps {
    name: string,
    status: string
}

export default class Component extends React.Component<NavigationProps> {
    render() {
        return <div>
            <div className="topMenu">
                <div>
                    <span>{this.props.name}</span>
                </div>
                <div>
                    
                </div>
            </div>
          </div>;
    }
 };