const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type UsersType = {
    id: number
    fullName: string
    photoUrl: string
    followed: boolean
    status: string
    location: {
        country: string
        city: string
    }
}
export type UsersInitialStateType = typeof initialState

const initialState = {
    users: [
        {
            id: 1,
            fullName: 'Vlad',
            photoUrl: '',
            followed: true,
            status: 'i am a boss',
            location: {country: 'Russia', city: 'Cheboksary'}
        },
        {
            id: 2,
            fullName: 'Dimych',
            photoUrl: '',
            followed: false,
            status: 'i am not a boss',
            location: {country: 'Belarus', city: 'Minsk'}
        },
        {
            id: 3,
            fullName: 'Nasty',
            photoUrl: '',
            followed: false,
            status: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut illo molestias provident repellendus tempora. Dolorem ducimus eligendi facilis illo illum, ipsum itaque numquam odit omnis ratione repellat temporibus ut.',
            location: {country: 'Russia', city: 'Cheboksary'}
        },
    ] as UsersType[],
}


export const followAC = (userID: number) => {
    return {type: FOLLOW, userID: userID} as const
}
export const unfollowAC = (userID: number) => {
    return {type: UNFOLLOW, userID} as const
}
export const setUserAC = (users: UsersType[]) => {
    return {type: SET_USERS, users} as const
}
type ActionCreatorUserType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUserAC>

export const usersReducer = (state: UsersInitialStateType = initialState, action: ActionCreatorUserType): UsersInitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}