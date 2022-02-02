import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { signOut } from "firebase/auth";
import {auth} from "../config/firebase";
import {useContext} from "react";
import {UserContext} from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const pagesIfNotLoggedIn = ['Login', 'Register'];
const pagesIfLoggedIn = ['Home', 'Add Food', 'My Diets', 'Logout'];

const TopAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const { user, setUser } = useContext(UserContext);

    const navigate = useNavigate()

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    function logoutUser() {
        signOut(auth).then(() => {
            setUser(null)
        }).catch((error) => {
            console.log(error)
        });
    }

    const handleMenuClick = (page) => {
        switch (page) {
            case 'Logout':
                logoutUser()
                break;
            case 'Login':
                navigate('/login');
                break;
            case 'Register':
                navigate('/register');
                break;
            case 'Home':
                navigate('/');
                break;
            case 'Add Food':
                navigate('/addfood');
                break;
            case 'My Diets':
                navigate('/mydiets');
                break;
        }
    }


    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        MyFit.tn
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {user?
                                pagesIfLoggedIn.map((page) => (
                                    <MenuItem key={page} onClick={() => handleMenuClick(page)}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                )) :
                                pagesIfNotLoggedIn.map((page) => (
                                    <MenuItem key={page} onClick={() => handleMenuClick(page)}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))
                            }

                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        MyFit.tn
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {user ?
                            pagesIfLoggedIn.map((page) => (
                                <Button
                                    key={page}
                                    onClick={() => handleMenuClick(page)}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            )) :

                            pagesIfNotLoggedIn.map((page) => (
                                <Button
                                    key={page}
                                    onClick={() => handleMenuClick(page)}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))
                        }
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default TopAppBar;
