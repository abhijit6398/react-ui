import React from 'react'
import { Link } from 'react-router-dom'
import categoryProduct from './../Resource/categoryProduct.json'

export default function Category() {
    
    return (
        <div className="bg-light">
            <div className="row m-1">
                <div className="col" style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-evenly'}}>
                    {
                        categoryProduct.map((productDetail)=>{
                            return( 
                            <Link to='/products' key={productDetail.id} style={{textDecoration : 'none'}}>
                                <div key={productDetail.id} className="card m-1 cardhover" style={{boxShadow:'0 0 3px black',borderRadius:'10px'}}>
                                        <img className="card-img-top" src={productDetail.img} style={{width:'120px', borderRadius:'50%'}} />
                                        <div>
                                            <h5 className="card-title text-center">{productDetail.name}</h5>
                                        </div>
                                    </div>
                            </Link>
                        )})
                    }
                </div>

            </div>
        </div>
    )
}
