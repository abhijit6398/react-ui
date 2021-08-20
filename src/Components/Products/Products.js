import React from 'react'
import {Link} from 'react-router-dom'


export const Product = (props) => {
     
    const {product} = props
    return (       
        <Link to={`/products/${product.id}`} key={product.id} style={{textDecoration : 'none'}}>
            <div className="card m-1 cardhover" style={{boxShadow:'0 0 3px black',borderRadius:'10px'}} >
                <img className="card-img-top img-fluid" src={product.src} alt={`${product.title}`} style={{width:'250px',  height:'200px'}}/>      
                    <div className="card-body text-center">
                        <p>
                            {
                                product.colors.map((color,index)=>(
                                    <button key={index} style={{backgroundColor:`${color}`,color:`${color}`,outline:'none',margin:'0 2px',cursor:'pointer',border:'none',boxShadow:'0 0 3px black',borderRadius:'20px'}}>0</button>
                                ))
                            }
                            </p>
                                <h3>
                                    {product.title}
                                </h3>
                                <span style={{color:'crimson'}}>&#8377; {product.price.toFixed(2)}</span>
                            <p>{product.description}</p>
                            
                            <button className="btn btn-sm btn-outline-primary">View More</button>
                            
                        </div>
                    </div>
        </Link>     
    )
}

