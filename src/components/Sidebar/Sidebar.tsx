import React from 'react';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import {useTheme} from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';
import {AccountBox, Home, Link, Telegram} from '@material-ui/icons';

export const PATH = {
    HOMEPAGE: '/',
    PROFILE: '/profile',
    DIALOGS: '/dialogs',
}
type linksType = {
    path: string
    link: string
    icon: string
}

export const Sidebar = (props: any) => {

    const links: linksType[] = [
        {path: PATH.HOMEPAGE, link: 'Home Page', icon: 'Home'},
        {path: PATH.PROFILE, link: 'Profile', icon: 'AccountBox'},
        {path: PATH.DIALOGS, link: 'Dialogs', icon: 'Telegram'},
    ]

    const iconList = (icon: string) => {
        switch (icon) {
            case 'Home':
                return <Home/>
            case 'AccountBox':
                return <AccountBox/>
            case 'Telegram':
                return <Telegram/>
            default:
                return <Link/>
        }
    }


    const linksEl = links.map((link, index) => {
        return <ListItem button
                         key={index}
                         component={NavLink} to={link.path}>
            <ListItemIcon>
                {iconList(link.icon)}
            </ListItemIcon>
            <ListItemText primary={link.link}/>
        </ListItem>
    })

    const theme = useTheme();
    return (
        <Drawer
            variant="permanent"
            className={clsx(props.classes.drawer, {
                [props.classes.drawerOpen]: props.open,
                [props.classes.drawerClose]: !props.open,
            })}
            classes={{
                paper: clsx({
                    [props.classes.drawerOpen]: props.open,
                    [props.classes.drawerClose]: !props.open,
                }),
            }}
        >
            <div className={props.classes.toolbar}>
                <IconButton onClick={props.handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                </IconButton>
            </div>
            <Divider/>
            <List>
                {linksEl}
            </List>
            <Divider/>
            <List>
                {['All mail', 'Trash'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}