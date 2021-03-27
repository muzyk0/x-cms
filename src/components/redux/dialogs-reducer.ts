export const SEND_MESSAGE = 'SEND-MESSAGE'
export const DELETE_DIALOG = 'DELETE-DIALOG'

export type MessageType = {
    id: number
    message: string
}
type DialogsType = {
    id: number
    name: string
}

const initialState = {
    dialogs: [
        {id: 1, name: 'Dimych',},
        {id: 2, name: 'Nasty',},
        {id: 3, name: 'Vova',},
        {id: 4, name: 'Viktor',},
        {id: 5, name: 'Olya',},
    ] as DialogsType[],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Dimych'},
    ] as MessageType[]
}
export type DialogsInitialStateType = typeof initialState

type ActionsType = ReturnType<typeof sendMessageAC>
    | ReturnType<typeof deleteDialogAC>

export const sendMessageAC = (message: string) => {
    return {
        type: SEND_MESSAGE, message: message
    } as const
}
export const deleteDialogAC = (dialogID: number) => {
    return {
        type: DELETE_DIALOG, dialogID
    } as const
}

export const dialogsReducer = (state: DialogsInitialStateType = initialState, action: ActionsType): DialogsInitialStateType => {

    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.message
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        case 'DELETE-DIALOG':
            return {...state, dialogs: state.dialogs.filter(dialog => dialog.id !== action.dialogID)}
        default:
            return state
    }

}