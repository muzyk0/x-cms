import React from 'react';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import {useStyles} from '../../App';

type PropsType = {
    open: boolean
    handleDrawerOpen: () => void
    handleDrawerClose: () => void
}

export const Header = ({open, handleDrawerOpen, handleDrawerClose, ...restProps}: PropsType) => {
    const classes = useStyles();
    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: open,
                    })}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap>
                    Mini X-CMS
                </Typography>
            </Toolbar>
        </AppBar>
    )
}