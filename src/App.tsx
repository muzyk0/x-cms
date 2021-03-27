import React, {useEffect} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Sidebar} from './components/Sidebar/Sidebar';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import {Home} from './components/Home/Home';
import {Profile} from './components/Profile/Profile';
import {Header} from './components/Heder/Header';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {Grid} from '@material-ui/core';

const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        activeClassName: {
            color: 'red'
        }
    }),
);

export default function MiniDrawer() {
    const classes = useStyles();

    const [open, setOpen] = React.useState<boolean>(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const open = localStorage.getItem('openSideBar')
        if (open) {
            setOpen(JSON.parse(open))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('openSideBar', JSON.stringify(open))
    }, [open])

    return (
        <Router>
            <div className={classes.root}>
                <CssBaseline/>
                <Header
                    classes={classes}
                    open={open}
                    handleDrawerOpen={handleDrawerOpen}
                    handleDrawerClose={handleDrawerClose}
                />
                <Sidebar
                    classes={classes}
                    open={open}
                    handleDrawerOpen={handleDrawerOpen}
                    handleDrawerClose={handleDrawerClose}
                />
                    <Grid container>
                        <main className={classes.content}>
                            <div className={classes.toolbar}/>
                            <Switch>

                                <Route exact path="/" render={() => <Home/>}/>
                                <Route path='/profile' render={() => <Profile/>}/>
                                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                                {/*<Route render={() => <Error404/>}/>*/}

                            </Switch>
                        </main>
                    </Grid>
            </div>
        </Router>
    );
}
