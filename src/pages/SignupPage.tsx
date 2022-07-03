import React, { useContext, useRef, useState } from 'react'
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { UseForm } from '../hooks/useForm'
import { UserContext } from '../components/context/userContext';
import { apiShop } from '../api/api';

const SignupPage = () => {
    
    const {signup}  = useContext(UserContext);
    let formData    = new FormData();
    const [file, setFile] = useState();

    const { username, fullname, email, dni, address, password, OnChange } = UseForm({
        username:"",
        fullname:"",
        email:"",
        dni: 39761371,
        address:"",
        password:""
    })

    const Signup = async () => {
        signup ( username, password, email, fullname, dni, address)
        
        if(file){
            formData.append("myFile", file as any)
            let res = await apiShop.post( `/api/avatar/upload/${username}`, formData );
        }
    }

    const handleFile = async (event: any) => {
        
        event.preventDefault();

        setFile(event.target.files[0])
        //formData.append("myFile", event.target.files[0] )
            
        //let res = await apiShop.post( `/api/avatar/upload/${username}`, formData );
    }

    return (
        <Box mt={7} display='flex' justifyContent='center' alignItems='center' height="calc(100vh - 200px)">

            <Box sx={{ width:350, padding:"10px 20px"}} >
                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <Typography variant="h1">Signup</Typography>
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
                            name='fullname'
                            placeholder='fullname'
                            fullWidth
                            value={fullname}
                            onChange= {OnChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            name='email'
                            placeholder='email'
                            fullWidth
                            value={email}
                            onChange= {OnChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            name='dni'
                            placeholder='dni'
                            fullWidth
                            value={dni}
                            onChange= {OnChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            name='address'
                            placeholder='direccion'
                            fullWidth
                            value={address}
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
                        <input 
                            name="myFile" 
                            id='myFile' 
                            type={"file"} 
                            onChange = {handleFile}
                            accept="image/png, .jpeg, .jpg, image/gif"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button fullWidth onClick={Signup}>Signup</Button>
                    </Grid>

                </Grid>
            </Box>
        </Box>
    )
}

export default SignupPage;