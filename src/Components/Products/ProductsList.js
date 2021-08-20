import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import { Product } from './Products';
import { dispatchProductList } from './action';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

export default function ProductsList() {
    const productsData = useSelector((state) => state.productsReducer.productsList)
    const dispatch = useDispatch()

    const actions = bindActionCreators(
        {
            dispatchProductList
        }, dispatch
    )

    const getData = useCallback(async () => {
        const res = await axios.get('https://api.jsonbin.io/b/611f36ebc5159b35ae011d6d')
        actions.dispatchProductList(res.data)
    }, [])
    useEffect(() => {
        getData()
    }, [getData])
    return (
        <div>
            <div className="col" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-evenly' }}>
                {
                    productsData.isProductsLoading ? <center><b><h1>Page Loading</h1></b></center>
                        :
                        productsData.map((product) => <Product key={product.id} product={product} />)
                }
            </div>
        </div>
    )
}
