import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


export default class Login extends Component {
	render() {
        return (
            <div class="container">
            	<h1>Hello~</h1>
            </div>
        );
    }
}

if (document.getElementById('login_form')) {
    ReactDOM.render(<Login />, document.getElementById('login_form'));
}