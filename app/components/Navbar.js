'use client';

import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Button, Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import { AccountCircle } from '@mui/icons-material';
import { useStore } from '../store/store'; // Ensure this path is correct according to your structure
import { logoutUser } from '../services/authService'; // Ensure this path is correct according to your structure

const Navbar = () => {
    const router = useRouter();
    const user = useStore((state) => state.user);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleSignOut = async () => {
        await logoutUser(); // Ensure logoutUser properly clears any session data on the server
        handleMenuClose();
        router.push('/login');
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#161a1d' }}>
            <Toolbar>
                <Box display="flex" alignItems="center" flexGrow={1}>
                    <img
                        src="https://chicagocarhelp.s3.us-east-2.amazonaws.com/Quinielas+(2).png"
                        alt="logo"
                        style={{ width: 45, height: 'auto', marginRight: 4 }}
                    />
                    <Button color="inherit" onClick={() => router.push('/')}>Quinielas</Button>
                </Box>

                {user ? (
                    <div>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={handleMenuClose}>
                                <Button color="inherit" onClick={() => router.push('/create-post')}>Create Post</Button>
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose}>
                                <Button color="inherit" onClick={() => router.push('/posts')}>Posts</Button>
                            </MenuItem>
                            <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
                        </Menu>
                    </div>
                ) : (
                    <>
                        <Button color="inherit" onClick={() => router.push('/login')}>Sign In</Button>
                        <Button color="inherit" onClick={() => router.push('/register')}>Register</Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

