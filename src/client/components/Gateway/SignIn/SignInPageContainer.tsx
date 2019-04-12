import * as React from 'react'
import SignInPage from './SignInPage'
import { actionCreators as userActions } from '../../../../store/modules/user'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { IStoreState } from '../../../../store/modules'

type Props = {
    user: object,
    userId: string,
    UserActions: typeof userActions
}

class SignInPageContainer extends React.Component<Props> {
    onNewUser = () => {
        const { UserActions } = this.props
        UserActions.updateinfo({user: {username: "jack"}, userId: "2"})
        console.log(this.props.userId)
    }

    render() {
        const { onNewUser } = this
        const { user, userId } = this.props

        return (
            <SignInPage
                onNewUser={onNewUser}
                user={user}
                userId={userId}
            />
        )
    }
}

export default connect(
    ({ user }: IStoreState) => ({
        user: user.user,
        userId: user.userId
    }),
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(SignInPageContainer)