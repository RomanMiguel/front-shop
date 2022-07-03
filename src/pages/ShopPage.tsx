import React from 'react'
import ListProducts from '../components/products/listProducts';
import { UseProducts } from '../hooks/getProducts';

const ShopPage = () => {
    
    const {isLoading, products} = UseProducts()

    return (
        <div>
        {
            (! isLoading) 
            && (<ListProducts products={products} />)
        }
        </div>
    )
}

export default ShopPage