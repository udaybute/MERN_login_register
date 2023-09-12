import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const SignUp = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result)
                navigate('/login')
            }).catch(err => {
                console.log(err)
            })

    }
    return (
        <div className='container w-100 m-auto mt-5 border border-2 bg-light'>
            <form onSubmit={handleSubmit} className='w-50 border p-5 mt-5 mb-5 m-auto' >
                <h2 className='text-center mt-2'>Register Form</h2>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} class="form-control" />
                </div>
                <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} class="form-control" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} class="form-control" />
                </div>

                <button type="submit" class="btn btn-success mt-2 mb-3 w-100">Register</button>
                <div id="emailHelp" class="form-text mb-2 mt-0">Already Have an Account ? </div>
                <Link to="/login" class="btn btn-secondary mt-2 mb-3 w-100">Login</Link>
            </form>
        </div>
    )
}

export default SignUp