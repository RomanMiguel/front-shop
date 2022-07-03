import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Grid, Typography, Box, CardMedia, Divider, Button } from '@mui/material';
import { apiShop } from '../api/api';
import { IProducts } from '../interfaces';

const DetailPage = () => {
    
    const {id} = useParams();
    const [product, setProduct] = useState<IProducts>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect( () => {
        getProduct()
    }, [id])

    const getProduct = async () => {
        const {data} = await apiShop.get<IProducts>(`/api/productos/${id}`)
        setProduct(data)
        setIsLoading(false)
    }

    if(isLoading)
        return <h1>Loading</h1>
    
    return (
        <Grid container spacing={3}>
            
            <Grid item xs={12} sm={7}>
                <CardMedia 
                    image= {product?.thumbnail}
                    component="img"
                />
            </Grid>

            <Grid item xs={12} sm={5} >
                <Typography variant='h3' component={"h3"}>{product?.name}</Typography>
                <Divider/>
                <Typography variant='h4' component={"h4"}>$ {product?.price}</Typography>
                <Typography variant='h4' component={"h4"}>Stock: {product?.stock} unidades</Typography>
                <Typography variant='subtitle1'>{product?.description}</Typography>
                
                <Box>
                    <Button variant='contained' fullWidth>Agregar al Carrito</Button>
                    <Button variant='contained' fullWidth>Ir al Carrito</Button>
                </Box>
            </Grid>
        </Grid >
    )
}

export default DetailPage