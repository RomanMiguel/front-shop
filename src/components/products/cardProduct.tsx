import React from 'react'
import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material'
import { IProducts } from '../../interfaces';

interface Props {
    product: IProducts
}

const CardProduct = ( {product}:Props) => {
  
    return (
        <Grid 
            item 
            xs={6} 
            sm={4}
        >
            <Card>
                <Link href={`/product/${product._id}`}>
                    <CardActionArea>
                        <CardMedia
                            component={"img"}
                            image= {product.thumbnail} 
                        />
                    </CardActionArea>
                </Link>
            </Card>
            
            <Box sx={{mt:1}} className="fadeIn">
                <Typography fontWeight={700}>{product.name}</Typography>
                <Typography fontWeight={500}>{product.price}</Typography>
            </Box>
        
        </Grid>
    )
}

export default CardProduct