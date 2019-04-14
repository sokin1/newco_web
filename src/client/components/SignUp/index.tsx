import * as React from 'react'

import * as styles from './signUp.scss'

export default class SignUp extends React.Component<{}, {}> {
    handleSubmit() {

    }

    render() {
        const h2_style = {
            color: "#fff"
        };

        return (
            <div className={styles.signup}>
                <form onSubmit={this.handleSubmit}>
                    <h2 style={h2_style}>Sign Up</h2>
                    <input type="text" name="username" placeholder="First name" /><br /><br />
                    <input type="text" name="username" placeholder="Last name" /><br /><br />
                    <input type="password" name="pass" placeholder="Password" /><br /><br />
                    <input type="password" name="pass" placeholder="Confirm Password" /><br /><br />
                    <input type="text" placeholder="Email address" /><br /><br />
                    <input type="submit" value="Sign up" /><br /><br />
                </form>
            </div>
        );
    }
}