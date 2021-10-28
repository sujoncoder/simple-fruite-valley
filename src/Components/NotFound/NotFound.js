import React from 'react';
import { Link } from 'react-router-dom';
import Notfound from '../../error-404-17.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notfound">
            <img src={Notfound} alt="" />
            <Link className="back" to="/shop">Back To Home</Link>
        </div>
    );
};

export default NotFound;