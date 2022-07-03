import { Grid } from '@mui/material';
import React from 'react'
import { IProducts } from '../../interfaces';
import CardProduct from './cardProduct';

interface Props {
    products: IProducts[]
}

const ListProducts = ({products}:Props) => {
  
    return (
        <Grid container spacing={3}>
        {
            products.map( product => (
                <CardProduct product={product} key={product._id}/>
            ))
        }
        </Grid>
    )
}

export default ListProducts