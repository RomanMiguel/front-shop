import React, { useContext } from 'react'
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { UseForm } from '../hooks/useForm'
import { UserContext } from '../components/context/userContext';

const LoginPage = () => {
    
    const { login } = useContext(UserContext)

    const { username, password, OnChange } = UseForm({
        username:"",
        password:""
    })

    const Login = () => {
        
        if(username.length>0 && password.length>0)
            login(username, password);
    }

    return (
        <Box display='flex' justifyContent='center' alignItems='center' height="calc(100vh - 200px)">

            <Box sx={{ width:350, padding:"10px 20px"}} >
                <Grid container>

                    <Grid item xs={12}>
                        <Typography variant="h1">Login</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            name='username'
                            placeholder='username'
                            fullWidth
                            value={username}
                            onChange= {OnChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            name="password"
                            placeholder='password'
                            fullWidth
                            value= {password}
                            onChange= {OnChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button fullWidth onClick={Login}>Login</Button>
                    </Grid>

                    <Grid item xs={12} display="flex" justifyContent={"flex-end"}>
                        <Link href='/signup'>
                            <Button >Sigup</Button>
                        </Link>
                    </Grid>
                
                </Grid>
            </Box>
        </Box>
    )
}

export default LoginPage