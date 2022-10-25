import React, { useState, useEffect } from 'react';
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import CartAside from './CartAside';
import { api } from '../../config';
import './Cart.scss';

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const [price, setPrice] = useState(0);
  const priceToString = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  useEffect(() => {
    fetch(`${api.carts}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(res => setCartItem(res.selectCart));
  }, [cartItem]);

  const deleteCartItem = id => {
    setCartItem(cartItem.filter(item => item.productId !== id));
  };

  return (
    <div className="cart">
      <div className="cartLeft">
        <CartHeader length={cartItem.length} price={priceToString(price)} />
        {cartItem.map(data => (
          <CartItem
            key={data.id}
            data={data}
            priceToString={priceToString}
            setPrice={setPrice}
            deleteCartItem={deleteCartItem}
          />
        ))}
      </div>
      <CartAside price={priceToString(price)} />
    </div>
  );
};
export default Cart;
