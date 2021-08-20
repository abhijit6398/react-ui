import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Product } from './Products';

export default function ProductsList() {
    const [productsData, setProductsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getData = async () => {
        const res = await axios.get('https://api.jsonbin.io/b/611f36ebc5159b35ae011d6d')
        // console.log("res", res.data)
        setProductsData(res.data)
        setIsLoading(false)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            {/* <h1>Product List</h1> */}
            <div className="col" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-evenly' }}>
                {
                    isLoading ? <center><b><h1>Page Loading</h1></b></center>
                        :
                        productsData.map((product) => <Product key={product.id} product={product} />)
                }
            </div>
        </div>
    )
}
