import React from 'react';
import {UsersPropsType} from './UsersContainer';
import {Avatar, Button, Grid, ListItemIcon, Paper, Typography} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import {BreadcrumbsComponent} from '../Dialogs/Dialogs';

export const Users: React.FC<UsersPropsType> = ({usersPage, ...props}) => {
    const usersEl = usersPage.users.map(user => {
            const unfollow = () => {
                props.unfollow(user.id)
            }
        const follow = () => {
            props.follow(user.id)
        }
        const subscribeButton = user.followed
            ? <Button variant={'text'} size={'small'} color={'secondary'} onClick={unfollow}>Unfollow</Button>
            : <Button variant={'text'} size={'small'} color={'primary'} onClick={follow}>Follow</Button>
        return (
                <Grid item xs={6} key={user.id}>
                    <Paper elevation={6} style={{padding: '10px'}}>
                        <Grid container direction="row">
                            <Grid item xs={2}>
                                <ListItem>
                                    <ListItemIcon>
                                        <Avatar src={user.photoUrl}>{user.fullName.charAt(0)}</Avatar>
                                    </ListItemIcon>
                                </ListItem>

                                {subscribeButton}

                            </Grid>

                            <Grid item xs={12} sm container>
                                <Grid item xs={12} sm container>
                                    <Grid item direction="column">
                                        <Typography gutterBottom variant="subtitle1">
                                            {user.fullName}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {user.status}
                                        </Typography>
                                    </Grid>

                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">{user.location.country}</Typography>
                                    <Typography variant="subtitle1">{user.location.city}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            )
        }
    )
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <BreadcrumbsComponent second={'Users'}/>
                </Grid>
                <Grid container spacing={3}>
                    {usersEl}
                </Grid>
            </Grid>
        </div>
    )
}