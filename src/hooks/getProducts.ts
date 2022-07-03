import { useEffect, useState } from "react"
import { apiShop } from "../api/api"
import { IProducts } from "../interfaces/Iproducts"

export const UseProducts = () => {

    const [products, setProducts] = useState<IProducts[]>([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        let {data} = await apiShop.get("/api/productos") 
        setProducts(data)
        setIsLoading(false)
    }

    return {
        products,isLoading
    }
}