import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@material-ui/core';


export default function ProductsDetail(props) {
    const { onAdd } = props;
    const [productData, setProductData] = useState({})
    const [isLoading, setIsLoading] = useState(true)


    const getProductData = async () => {
        const res = await axios.get('https://api.jsonbin.io/b/611f36ebc5159b35ae011d6d')
        //   console.log("reso",res.data)
        const findProductData = res.data.find((pro) => pro.id === props.match.params.id)
        //   console.log(findProductData)
        setProductData(findProductData);
        setIsLoading(false)
    }
    useEffect(() => {
        getProductData()
        return () => {
            console.log("cleaned up")
        }
    }, [])
    // console.log("prop",props)
    // console.log(cart)
    return (
        <div>
            {/* <h1>Datail Product : {props.match.params.id}</h1> */}

            {
                isLoading ? <center><b><h1>Page Loading</h1></b></center>
                    :
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-12 ">
                                <div className="card m-1 cardhover" style={{ boxShadow: '0 0 3px black', borderRadius: '10px' }} >
                                    <img className="card-img-top img-fluid" src={productData.src} alt={`${productData.title}`} />
                                    <div className="card-body d-flex justify-content-center">
                                        <Link to='/cart'>
                                            <button className="btn btn-outline-light bg-warning" onClick={() => onAdd(productData)}>Add to Cart</button>
                                        </Link>
                                        <button style={{ backgroundColor: 'orangered', color: 'white' }} className="btn btn-outline-primary">Add to WishList</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-12">
                                <h4 className="m-1">{productData.title} ,Walking Comfortable Sports Shoes Running Shoes For Men (Black) </h4>
                                <h3 className="m-1"> &#8377; {productData.price} <span className="text-muted h6 "><del> &#8377;499</del></span></h3>
                                <div className="d-flex flex-row align-items-center justify-content-start m-1">
                                    <h4><span className="badge badge-success">3.6 <img style={{ marginTop: '-5px' }} src="https://img.icons8.com/material-outlined/24/000000/star--v2.png" width="20px" /></span></h4>&nbsp;
                                    <small> 2,771 ratings and 305 reviews</small>
                                </div>
                                <div className="m-1">
                                    <span>Select Colors : </span>
                                    {
                                        productData.colors.map((color, index) => (
                                            <button key={index} style={{ backgroundColor: `${color}`, color: `${color}`, outline: 'none', margin: '0 2px', cursor: 'pointer', border: 'none', boxShadow: '0 0 3px black', borderRadius: '20px' }}>0</button>
                                        ))
                                    }
                                </div>
                                <div>
                                    <h6>Available Offers :</h6>
                                    <ul type="none" >
                                        <li><img width="24px" src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" /> <b> Special Price</b> <small>Get extra 25% off (price inclusive of discount)</small><a className="text-primary text-decoration-none"> T&C</a> </li>
                                        <li><img width="24px" src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" /> <b> Bank Offer</b> <small>10% off on ICICI Bank Cards, up to ₹300. On orders of ₹1750 and above</small><a className="text-primary text-decoration-none"> T&C</a> </li>
                                        <li><img width="24px" src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" /> <b> Bank Offer</b> <small>5% Unlimited Cashback on Flipkart Axis Bank Credit Card</small><a className="text-primary text-decoration-none"> T&C</a> </li>
                                        <li><img width="24px" src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" /> <b> Bank Offer</b> <small>20% off on 1st txn with Amex Network Cards issued by ICICI Bank,IndusInd Bank,SBI Cards and Mobikwik</small><a className="text-primary text-decoration-none"> T&C</a> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
            }

        </div>
    )
}
