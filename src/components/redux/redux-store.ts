import {combineReducers, createStore} from 'redux';
import {dialogsReducer} from './dialogs-reducer';

export const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)