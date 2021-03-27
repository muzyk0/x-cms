import {connect} from 'react-redux';
import {AppStateType} from '../redux/redux-store';
import {Dispatch} from 'redux';
import {followAC, setUserAC, unfollowAC, UsersInitialStateType, UsersType} from '../redux/users-reducer';
import {Users} from './Users';

type MapStateToProps = {
    usersPage: UsersInitialStateType
}
type MapDispatchToProps = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
}
export type UsersPropsType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        usersPage: state.usersPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow(userID: number) {
            dispatch(followAC(userID))
        },
        unfollow(userID: number) {
            dispatch(unfollowAC(userID))
        },
        setUsers(users: UsersType[]) {
            dispatch(setUserAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)