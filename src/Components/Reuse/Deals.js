import React from 'react';
import './../../App.css'
import dealsData from '../Resource/dealsData.json';
import { Link } from 'react-router-dom';

export default function Deals() {
    return (
        <div className="bg-light">
            <div className="row m-1 d-flex flex-column">
                <div className="col">
                    <div className=" d-flex justify-content-between align-item-center border border-grey p-2 mt-3">
                        <div>
                            <h4>Deals of the Day</h4>
                        </div>
                        <div>
                            <button className="btn btn-primary">VIEW ALL</button>
                        </div>
                    </div>
                </div>
                <div className="col" style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-evenly'}}>
                    {
                        dealsData.map((product)=> {
                            return (
                            <Link to='/products' key={product.id} style={{textDecoration : 'none'}}>
                            <div key={product.id} className="card m-1 cardhover" style={{boxShadow:'0 0 3px black',borderRadius:'10px'}}>
                                <img className="card-img-top p-1" src={product.img} style={{width:'120px',height:'150px', borderRadius:'50%'}} />
                                <div className="text-center">
                                    <h5 className="card-title">{product.name}</h5>
                                    <small className="text-muted">{product.description}</small>
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
