import {MessageType} from '../redux/dialogs-reducer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {IconButton, Paper, TextField} from '@material-ui/core';
import React, {ChangeEvent} from 'react';
import {Send} from '@material-ui/icons';

type MessagesPropsType = {
    messages: MessageType[]
    onSendMessage: (message: string) => void
}
export const Messages = (props: MessagesPropsType) => {

    const [message, setMessage] = React.useState('')
    const [error, setError] = React.useState<boolean>(false)

    const onSetMessage = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
        setError(false)
    }
    const sendMessage = () => {
        const trimmedMessage = message.trim()
        if (trimmedMessage) {
            props.onSendMessage(trimmedMessage)
            setMessage('')
        } else {
            setError(true)
        }
    }

    const messages = props.messages.map((message) => (
        <ListItem key={message.id} button>
            <ListItemText primary={message.message}/>
        </ListItem>
    ))
    return (
        <>
            <Paper>
                {messages}
            </Paper>

            <Paper style={{marginTop: '10px', padding: '10px'}}>
                <TextField
                    onChange={onSetMessage}
                    value={message}
                    id="standard-textarea"
                    label="Send message"
                    placeholder="Enter message"
                    multiline
                    error={error}
                    helperText={error ? 'Incorrect entry.' : ''}
                />
                <IconButton onClick={sendMessage}>
                    <Send/>
                </IconButton>
            </Paper>
        </>
    )
}