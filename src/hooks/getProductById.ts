import { useEffect, useState } from 'react';
import { apiShop } from '../api/api';
import { IProducts } from '../interfaces/Iproducts';

interface Props {
    id: string
}

export const UseProductById = ({id}: Props) => {

    const [product, setProduct] = useState<IProducts>()
    const [isLoading, setIsLoading] = useState(true)

    
    const getProduct = async () => {
        console.log(id)
        const {data} = await apiShop.get<IProducts>(`/api/productos/${id}`)
        console.log(data)
        setProduct(data)
        setIsLoading(false)
    }
    
    useEffect( () => {
        getProduct()
    }, [id])

    return {
        product, isLoading
    }
}