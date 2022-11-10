import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const {logIn, googleSignin} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = e => {        
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        
        logIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace:true})
        })
        .catch(err => console.log(err))
    }

    const googleLogin = () =>{
        googleSignin()
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <div className='container py-5'>
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="form-heading">
                        <h3 className='text-center'>Login</h3>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" name="email" className="form-control" placeholder='Your email' id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" placeholder='Password' id="exampleInputPassword1"/>
                        </div>
                        <div className="login text-center mb-4">
                            <button type="submit" className="btn btn-primary px-5">Login</button>
                        </div>
                        <p className='text-center'>Don't have an account <Link to='/signup'>Sign Up</Link></p>
                        <div className="social text-center">
                        <button onClick={googleLogin} className="btn btn-warning px-5">Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;