import {connect} from 'react-redux';
import {AppStateType} from '../redux/redux-store';
import {deleteDialogAC, DialogsInitialStateType, dialogsReducer, sendMessageAC} from '../redux/dialogs-reducer';
import {Dispatch} from 'redux';
import {Dialogs} from './Dialogs';

type MapStateToPropsType = {
    dialogPage: DialogsInitialStateType
}
type MapDispatchToPropsType = {
    onSendMessage: (message: string) => void
    onDeleteDialog: (dialogID: number) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onSendMessage(message: string) {
            dispatch(sendMessageAC(message))

        },
        onDeleteDialog(dialogID: number) {
            dispatch(deleteDialogAC(dialogID))

        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


