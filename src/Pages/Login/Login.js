import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('LogIn');
    const {logIn, googleSignin, loading} = useContext(AuthContext);
    const [error, setError] = useState('');
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
            navigate(from, {replace:true});
            loading(true);
        })
        .catch(err => {
            console.log(err)
            setError(err.message);
        })
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
        <div style={{height:'80vh'}}>
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
                        <p className='text-danger text-center'>{error}</p>
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