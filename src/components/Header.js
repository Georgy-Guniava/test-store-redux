import React, {Component} from "react";
import { PageHeader} from 'react-bootstrap'
// import '../style/App.css';

export default class Header extends Component {
    render() {
        return (
            <PageHeader className="App" id="header">
                React Test Store <small>Welcome</small>
            </PageHeader>
        );
    }
};

