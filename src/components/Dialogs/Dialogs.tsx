import {Breadcrumbs, Grid, IconButton, Link, Typography} from '@material-ui/core';
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import {DialogsPropsType} from './DialogsContainer';
import {Messages} from './Messages';
import {NavLink} from 'react-router-dom';
import {useStyles} from '../../App';
import {Delete} from '@material-ui/icons';

export const Dialogs = ({dialogPage, ...props}: DialogsPropsType) => {
    const classes = useStyles();

    const dialogs = dialogPage.dialogs.map((dialog) => {

        const deleteDialog = () => {
            props.onDeleteDialog(dialog.id)
        }

        return <ListItem key={dialog.id} button
                         component={NavLink} to={`/dialogs/${dialog.id}`} activeClassName={classes.activeClassName}
                         exact>
            <ListItemIcon>
                <Avatar alt="Remy Sharp">{dialog.name.charAt(0)}</Avatar>
            </ListItemIcon>
            <ListItemText primary={dialog.name}/>
            <IconButton size='small' onClick={deleteDialog}>
                <Delete/>
            </IconButton>
        </ListItem>
    })
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <BreadcrumbsComponent second={'Dialogs'}/>
                </Grid>

                <Grid item xs={2}>
                    {dialogs}
                </Grid>
                <Grid item xs={10}>
                    <Messages onSendMessage={props.onSendMessage} messages={dialogPage.messages}/>
                </Grid>


            </Grid>
        </div>
    )
}

type BreadcrumbsComponentPropsType = {
    first?: string
    second: string
}
export const BreadcrumbsComponent = (props: BreadcrumbsComponentPropsType) => {
    return <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
            Mini X-CMS
        </Link>
        {props.first && <Link color="inherit" href="/">{props.first}</Link>}
        <Typography color='textPrimary'>{props.second}</Typography>
    </Breadcrumbs>
}