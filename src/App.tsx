import React from 'react';
import Navigation from './components/Navigation/Navigation';
import "./styles/app.less";

export default class App extends React.Component {
    render() {
        return <Navigation name="Edward 'Eddie' Jostell" status="HEJ"/>;
    };
}