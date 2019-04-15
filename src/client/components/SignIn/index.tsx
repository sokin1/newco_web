import * as React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'

import * as styles from './signIn.scss'

interface IProps extends RouteComponentProps<any> {
}

export default class SignIn extends React.Component<IProps, {}> {
    handleSubmit = e => {
        e.preventDefault()

        const { history } = this.props
        history.push('/main')
    }

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
                <form onSubmit={this.handleSubmit}>
                    <h2 style={h2_style}>Log In</h2>
                    <input type="text" name="username" placeholder="Username" />
                    <input type="password" name="pass" placeholder="Password" /><br /><br />
                    <a href=""><input type="submit" value="Log In" /></a><br /><br />
                    <div id="container">
                        <a href="#" style={a_style}>Forgot Password</a>
                    </div>
                    <br /><br /><br /><br /><br /><br />
                    Don't have account?<Link to="/signup">&nbsp;Sign Up</Link>
                </form>
            </div>
        );
    }
}