import {combineReducers, createStore} from 'redux';
import {dialogsReducer} from './dialogs-reducer';
import {usersReducer} from './users-reducer';

export const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)