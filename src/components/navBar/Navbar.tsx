import React from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography, Link } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';

const Navbar = () => {

    return (
        <AppBar position='sticky'>
            <Toolbar>
                <Box>
                    <Link href='/'>
                        <Typography variant='h6'>Shop</Typography>
                    </Link>
                </Box>

                <Box flex={1}/>
                

                <Link href='/login'>
                    <IconButton>
                        <LoginIcon/>
                    </IconButton>
                </Link>

            </Toolbar>
        </AppBar>
    )
}

export default Navbar