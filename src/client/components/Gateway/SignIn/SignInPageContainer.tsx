import * as React from 'react'
import SignInPage from './SignInPage'
import { actionCreators as userActions } from '../../../../store/modules/user'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { IStoreState } from '../../../../store/modules'

type Props = {
    user: object,
    UserActions: typeof userActions
}

class SignInPageContainer extends React.Component<Props> {
    onNewUser = () => {
        const { UserActions } = this.props
        UserActions.updateinfo({username: "jack"})
        console.log(this.props.user)
    }

    render() {
        const { onNewUser } = this
        const { user } = this.props

        return (
            <SignInPage
                onNewUser={onNewUser}
                user={user}
            />
        )
    }
}

export default connect(
    ({ user }: IStoreState) => ({
        user: user.user
    }),
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(SignInPageContainer)