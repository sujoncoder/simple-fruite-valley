import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProduct] = useState ([]);
    const [cart,setCart] = useState([]); //j ghula amra click kora set kortesi.

    const handleAddToCart = (product) =>{
        const newCart = [...cart,product]
        setCart(newCart) //ai khane amra full object a set kortesi store.
    }

    useEffect (()=>{
        fetch('./fruits.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    return (
        <div>
              <div className="slider">
            <Carousel>
            <Carousel.Item>
            <Carousel.Caption className="tree">
             <h3>A tree is known by its fruit; a man by his deeds. A good deed is never lost; he who sows courtesy reaps friendship, and he who plants kindness gathers love.</h3>
            
            </Carousel.Caption>
                <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2020/07/24/21/58/lemon-5435158__340.jpg"
                alt=""
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337__340.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2021/09/16/15/26/fruit-6630377__340.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2016/01/05/13/58/apple-1122537__340.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2018/06/04/23/42/raspberries-3454504__340.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2018/07/20/14/02/grapes-3550733__340.jpg.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2018/06/15/23/27/cherries-3477927__340.jpg.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2013/11/29/16/34/berries-221193_960_720.jpg.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2019/10/21/14/54/oranges-4566275_960_720.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
            </div>

            <div className="shop-container">
                <div className="products">
                    <h1>Fresh Fruits Collect Around The World..!</h1>
                    {
                        products.map(product => <Product 
                            product={product}
                            key={product.id}
                            handleAddToCart={handleAddToCart}
                            >
                            </Product> )
                    }
                    </div>

                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>

            </div>
          

            
        </div>
    );
};

export default Shop;