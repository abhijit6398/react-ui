import React from 'react'

export default function Cart(props) {
    const { cartItems, onAdd, onRemove, onCheckout } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 500 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-8 m-auto">
                    <div className="card">
                        <div className="card-header text-center bg-light">
                            <h2>My Cart</h2>
                        </div>
                        <div className="card-body">
                            <div>
                                {
                                    cartItems.length === 0 && <div className="d-flex align-items-center justify-content-center " style={{ width: '60vw', height: '50vh', fontSize: '50px' }}> Cart is Empty.....</div>
                                }
                            </div>
                            {
                                cartItems.map((item) => (
                                    <div key={item.id} className="row table-responsive-sm" >
                                        <table className="table text-center">
                                            <tr>
                                                <td>
                                                    <h5> {item.title}</h5>
                                                </td>
                                                <td>
                                                    <img src={item.src} width="100px" />
                                                </td>
                                                <td>
                                                    <div>
                                                        <button onClick={() => onAdd(item)} > + </button>
                                                        <h3>{item.qty}</h3>
                                                        <button onClick={() => onRemove(item)} >- </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    &#8377; {item.price.toFixed(2)}
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                ))
                            }
                            {
                                cartItems.length !== 0 && (
                                    <>
                                        <hr />
                                        <div className="card">
                                            <div className="card-body">
                                                <table className="table d-flex justify-content-end" >
                                                    <tbody>
                                                        <tr className="d-flex justify-content-between">
                                                            <td> Items Price</td>
                                                            <td> &#8377; {itemsPrice.toFixed(2)}</td>
                                                        </tr>
                                                        <tr className="d-flex justify-content-between">
                                                            <td> Tax Price</td>
                                                            <td> &#8377; {taxPrice.toFixed(2)}</td>
                                                        </tr>
                                                        <tr className="d-flex justify-content-between">
                                                            <td> Shipping Price</td>
                                                            <td> &#8377; {shippingPrice.toFixed(2)}</td>
                                                        </tr>
                                                        <tr className="d-flex justify-content-between">
                                                            <td> Total Price</td>
                                                            <td> &#8377; {totalPrice.toFixed(2)}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <hr />
                                                <div className="d-flex justify-content-end">
                                                    <button className="btn  btn-outline-primary"
                                                        onClick={() => {
                                                            onCheckout();
                                                        }
                                                        } > Checkout </button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
