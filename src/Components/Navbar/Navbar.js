import React from 'react'
import { Fragment } from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useHistory } from 'react-router-dom'
import cartIcon from './../Img/shopping-cart-solid.svg'


function Navbar(props) {
    const { countCartItems } = props;
    const history = useHistory()
    const handleClick = () => {
        return history.push('/')
    }
    return (
        <Fragment>
            <nav className="navbar navbar-light bg-primary">
                <div className="container d-flex  flex-sm-column flex-md-row flex-lg-row justify-content-sm-evenly align-items-sm-center">
                    <Link to='/' style={{ textDecoration: 'none' }}><div style={{ color: 'white', fontSize: '35px', fontWeight: 'bold' }}><em>Simple<span style={{ color: 'yellow' }}>Kart</span></em></div></Link>

                    <div className="navbar">
                        <input type="text" style={{ border: 'none', outline: 'none', borderRadius: '10px', width: '220px' }} placeholder="Search your items, brands" className="text-center" />
                        <FontAwesomeIcon icon={faSearch} className="text-white ml-1" />
                    </div>

                    <div className="d-flex flex-row">
                        <Link to='/cart' style={{ textDecoration: 'none' }}>
                            <img src={cartIcon} alt="" width="20" style={{ width: '20px', margin: '5px' }} onClick={handleClick} />
                            <span style={{ position: 'relative', backgroundColor: 'crimson', fontSize: '10px', color: 'white', padding: '3px 5px', borderRadius: '50%', top: '-10px', left: '-7px' }}>{countCartItems} </span>
                        </Link>&nbsp;&nbsp;
                        {/* <Link to='/signin' style={{textDecoration : 'none'}}><button className="btn btn-outline-light btn-sm"> Sign In</button></Link> */}
                        {!props.auth ?
                            <Link to='login' style={{ textDecoration: 'none' }} ><img style={{ marginTop: '-7px' }} src="https://img.icons8.com/ios-glyphs/30/000000/user-male--v1.png" /><span className="h5 text-white">Abhijit</span>&nbsp;&nbsp;&nbsp;<button className="btn btn-outline-light btn-sm">Log In</button></Link>
                            :
                            <div > <img style={{ marginTop: '-7px' }} src="https://img.icons8.com/ios-glyphs/30/000000/user-male--v1.png" /><span className="h5 text-white">Abhijit</span> &nbsp;&nbsp;&nbsp;<button className="btn btn-outline-light btn-sm" onClick={() => props.logoutHandler()}>logout</button></div>
                        }

                    </div>
                </div>
            </nav>


        </Fragment>

    )
}
export default Navbar;