import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div>
            <div className="login">
            <h2>Login Please...!</h2>
            <form>
                <input type="email" placeholder="Enter Your Email" /> <br />
                <input type="password" placeholder="Enter Your Password" /> <br />
            </form>
                <button>Login</button> <br />
                <span>Not a member ? <Link to="/register"> Create account</Link> </span>
            </div>
        </div>
    );
};

export default Login;