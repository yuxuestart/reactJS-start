import React from 'react';
import LoginForm from './login-form';

export default class Navigation extends React.Component {
    render() {
        return (
            <div>
                <div id = 'nav-link'>
                    <nav>
                        <a href='#'>About</a>
                    </nav>
                </div>
                <br></br>
                <div>
                <LoginForm />
                </div>
            </div>
        )
    }
}