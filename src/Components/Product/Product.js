import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {img,name,price} = props.product ||{}
    const {handleAddToCart} = props ||{}
    return (
        <div className="product-total">
           <div className="image">
               <img src={img} alt="" />
               <div className="data">
                <h5>{name}</h5>
                <span>Price: $ {price}</span> <br />
                <button 
                onClick={()=>handleAddToCart(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart}/> Purchase</button>
                </div>
           </div>

         
        </div>
    );
};

export default Product;