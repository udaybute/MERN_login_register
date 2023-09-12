import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result)
                if (result.data === "Success") {
                    navigate('/home')
                }

            }).catch(err => {
                console.log(err)
            })

    }


    return (
        <div className='container  m-auto mt-5 border border-2 bg-light'>
            <form onSubmit={handleSubmit} className='w-50 border p-5 mt-5 mb-5 m-auto' >
                <h2 className='text-center mt-2'>Login Page</h2>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary mt-2 mb-3 w-100">Login</button>
            </form>
        </div>
    )
}

export default Login