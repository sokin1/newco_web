import * as React from 'react'

import * as styles from './enterPage.scss'

export default class EnterPage extends React.Component<{}, {}> {
    render() {
        const h2_style = {
            color: 'white'
        };


        const a_style = {
            marginRight: '0px',
            fontSize: '13px',
            fontFamily: 'Tahoma, Geneva, sans-serif'
        };

        return (
            <div className={styles.signin}>
                <form>
                    <h2 style={h2_style}>Log In</h2>
                    <input type="text" name="username" placeholder="Username" />
                    <input type="password" name="pass" placeholder="Password" />
                    <a href=""><input type="button" value="Log In" /></a><br /><br />
                    <div id="container">
                        <a href="#" style={a_style}>Reset Password</a>
                        <a href="#" style={a_style}>Forgot Password</a>
                    </div>
                    <br /><br /><br /><br /><br /><br />
                    Don't have account?<a href="#">&nbsp;Sign Up</a>
                </form>
            </div>
        );
    }
}