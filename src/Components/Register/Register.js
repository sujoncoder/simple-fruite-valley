import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div>
            <div className="register">
            <h2>Registration Please...!</h2>
            <form>
                <input type="text" placeholder="Your First Name" /> <br />
                <input type="text" placeholder="Your Last Name" /> <br />
                <input type="text" placeholder="Your Country" /> <br />
                <input type="email" placeholder="Your Email" /> <br />
                <input type="password" placeholder="New Password" /> <br />
                <input type="password" placeholder="Confirm Password" /> <br />
            </form>
            <button>Submit</button> <br />
            <span>Already Registered ? <Link to="/login">Login</Link></span>
            </div>
        </div>
    );
};

export default Register;