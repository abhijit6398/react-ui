import React, { useState } from 'react'
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Home from './MainPage/Home';
import Cart from './MainPage/Cart';
import Login from './Auth/Login';
import PageNotFound from './MainPage/PageNotFound';
import { ProductsDetail, ProductsList } from './Products/index'


export default function Main(props) {
    const [auth, setAuth] = useState(false)
    const [cartItems, setCrtItems] = useState([]);
    const history = useHistory()

    const onAdd = (product) => {
        const exist = cartItems.find(x => x.id === product.id);
        if (exist) {
            setCrtItems(
                cartItems.map(x =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            )
        } else {
            setCrtItems([...cartItems, { ...product, qty: 1 }])
        }
    }

    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCrtItems(
                cartItems.filter((x) =>
                    x.id !== product.id
                )
            );
        } else {
            setCrtItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
        }
    }

    const onCheckout = () => {
        setCrtItems([]);
        history.push('/')

    }

    const loginHandler = () => {
        setAuth(true)
    }
    const logoutHandler = () => {
        setAuth(false)
    }

    function PrivateRoutes({ component: Component, auth, ...rest }) {
        return <Route
            {...rest}
            render={(props) => auth ?
                <Component {...props} />
                : <Redirect to={{ pathname: '/login' }} />
            }
        />
    }


    return (
        <div>
            <Navbar auth={auth} logoutHandler={logoutHandler} countCartItems={cartItems.length} />
            <Switch>
                <Route exact path='/' component={Home} />

                <Route exact path='/products' component={ProductsList} />
                <Route path='/products/:id' render={(props) => <ProductsDetail {...props} onAdd={onAdd} />} />

                <Route path='/login' render={(props) => <Login {...props} loginHandler={loginHandler} />} />

                {auth === true ?
                    <Route path='/cart' render={(props) => <Cart {...props} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onCheckout={onCheckout} />} />
                    : <Redirect to='/login' />
                }

                {/* <PrivateRoutes auth={auth} path='/cart' component={Cart} /> */}

                <Route render={() => <PageNotFound />} />
            </Switch>
            <Footer />
        </div>
    )
}
