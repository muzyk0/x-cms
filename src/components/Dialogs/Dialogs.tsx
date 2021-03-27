import {Breadcrumbs, Grid, Link, Typography} from '@material-ui/core';
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import {DialogsPropsType} from './DialogsContainer';
import {Messages} from './Messages';
import {NavLink} from 'react-router-dom';
import {useStyles} from '../../App';

export const Dialogs = ({dialogPage, ...props}: DialogsPropsType) => {
    const classes = useStyles();
    const dialogs = dialogPage.dialogs.map((dialog) => {
        return <ListItem key={dialog.id} button
                  component={NavLink} to={`/dialogs/${dialog.id}`} activeClassName={classes.activeClassName} exact>
            <ListItemIcon>
                <Avatar alt="Remy Sharp">{dialog.name.charAt(0)}</Avatar>
            </ListItemIcon>
            <ListItemText primary={dialog.name}/>
        </ListItem>
    })
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <BreadcrumbsComponent />
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

export const BreadcrumbsComponent = () => {
    return <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
            Mini X-CMS
        </Link>
        <Link color="inherit" href="/dialogs">
            Dialogs
        </Link>
        <Typography color="textPrimary">Dimych</Typography>
    </Breadcrumbs>
}