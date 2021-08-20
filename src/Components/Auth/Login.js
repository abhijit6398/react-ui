import React, { useState } from 'react'
import { BUTTON, Input, Checkbox } from '../Common';

export default function Login(props) {
    const [formData, setFormData] = useState({
        email: 'abhijit@gmail.com',
        password: 'abc123'
    })
    const [errors, setError] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("formdata", formData) 
        if (formData.email == "abhijit@gmail.com" && formData.password == "abc123") {
            props.loginHandler()
            props.history.push('/cart')
        } else {
            setError({
                email: 'You have entered a wrong Email',
                password: 'Either email or password is wrong'
            })
        }
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className="container ">
            <div className="card ">
                <div className="card-header m-auto">
                    <h1>Login Form</h1>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-5 col-sm-12 m-auto">
                            <form onSubmit={handleSubmit} className="d-flex flex-column m-1">
                                <Input
                                    name='email'
                                    placeholder="Enter Email"
                                    value={formData.email}
                                    label="Email"
                                    type="email"
                                    onChange={(e) => handleChange(e)}
                                    error={errors.email}
                                />
                                <br />
                                <Input
                                    name='password'
                                    placeholder="Enter password"
                                    value={formData.password}
                                    label="Password"
                                    type="password"
                                    onChange={(e) => handleChange(e)}
                                    error={errors.password}
                                />
                                <Checkbox
                                    label="Remember the sign details."
                                    onChange={(e) => handleChange(e)}

                                />
                                <BUTTON type="submit" text="Login" color="primary" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
