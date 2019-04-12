import * as React from 'react';

import './signinPage.scss'

type Props = {
    user: object;
    userId: string;
    onNewUser(): void;
}

const SignInPage: React.FunctionComponent<Props> = ({ user, userId, onNewUser }) => (
    <div>
        <h1>Sign in {user['username']} {userId}</h1>
        <button onClick={onNewUser}>New User</button>
    </div>
)

export default SignInPage