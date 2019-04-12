import * as React from 'react';

import './signinPage.scss'

type Props = {
    user: object;
    onNewUser(): void;
}

const SignInPage: React.FunctionComponent<Props> = ({ user, onNewUser }) => (
    <div>
        <h1>Sign in</h1>
        <button onClick={onNewUser}>New User</button>
    </div>
)

export default SignInPage