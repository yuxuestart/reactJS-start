import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return (
            <div id = 'login-div'>
                <div>
                    <h3 class='h3-class'>Log In</h3>
                </div>

                <div class='centered'>

                    <label for = "username">User Name: </label>
                    <input type = 'username' id = 'username' class='input'></input>
                    <br></br>
                    <label for ="password">Password: </label>
                    <input type = 'password' id = 'password' class='input'></input>
                </div>  
            </div>
        )
    }
}