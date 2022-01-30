import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../Img/logo2.png';
import '../Css/Login.css';
import { auth } from './firebase'

function Login() {
    let history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const login = event => {
        event.preventDefault(); // this stops the refress !!!
        // do the login logic ... 
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // logged in, redirect to homepage .. 
                history("/");
            })
            .catch((e) => alert(e.message));

    }
    const register = event => {
        event.preventDefault(); // this stops the refress !!!
        // do the register logic ... 
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                //creted a user and logged in , redirect to homepage
                history("/");

            })
            .catch((e) => alert(e.message));
    };

    return (
        <div className='login'>
            <Link to="/">
                <img src={img} alt="" className='login__logo' />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={event => setEmail(event.target.value)} name="" id="" />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)} name="" id="" />
                    <button onClick={login} type='submit' className='login__signInButton'>Sign In</button>
                </form>
                <p>By signing in you are agree to Amazon's Conditions of use and sale. Please see our privacy notice , our Cookies notice and our intrest based ads notice.</p>
                <button onClick={register} type='submit' className='login__registerButton'>Create Your Amazon Account</button>
            </div>
        </div>

    );
}

export default Login;
