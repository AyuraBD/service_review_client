import React, { useContext } from 'react';
import './Signup.css';

import { AuthContext } from '../../Context/AuthProvider';

const Signup = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignup = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.log(err))
    }
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="form-heading">
                        <h3 className='text-center'>Sign Up</h3>
                    </div>
                    <form onSubmit={handleSignup}>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="text" name='name' placeholder='Your name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" name="email" className="form-control" placeholder='Your email' id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" placeholder='Password' id="exampleInputPassword1"/>
                        </div>
                        <div className="signup text-center">
                         <button type="submit" className="btn btn-primary px-5">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;