import React, {Component} from "react";
import { PageHeader} from 'react-bootstrap'
// import '../style/App.css';

export default class Header extends Component {
    render() {
        return (
            <PageHeader className="App" id="header">
                React Test Store <small>Добро пожаловать Welcome 歡迎 Willkommen zurück</small>
            </PageHeader>
        );
    }
};

