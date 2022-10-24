import React, { useState, useEffect } from 'react';
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import CartAside from './CartAside';
import './Cart.scss';

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const [price, setPrice] = useState(0);

  const priceToString = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  useEffect(() => {
    fetch('http://10.58.52.114:3000/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
      .then(res => res.json())
      .then(res => setCartItem(res));
  }, []);
  return (
    <div className="cart">
      <div className="cartLeft">
        <CartHeader length={DATA.length} price={priceToString(price)} />
        {DATA.map(data => (
          <CartItem
            key={data.id}
            data={data}
            priceToString={priceToString}
            setPrice={setPrice}
          />
        ))}
      </div>
      <CartAside price={priceToString(price)} />
    </div>
  );
};
export default Cart;

const DATA = [
  {
    id: 0,
    name: '에어포스',
    price: 119000,
    thumbnail:
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    description: '착용감 좋은 신발~!',
    categoryname: '남성 Originals',
  },
  {
    id: 1,
    name: '에어포스',
    price: 119000,
    thumbnail:
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    description: '착용감 좋은 신발~!',
    categoryname: '남성 Originals',
  },
  {
    id: 2,
    name: '에어포스',
    price: 119000,
    thumbnail:
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    description: '착용감 좋은 신발~!',
    categoryname: '남성 Originals',
  },
  {
    id: 3,
    name: '에어포스',
    price: 119000,
    thumbnail:
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    description: '착용감 좋은 신발~!',
    categoryname: '남성 Originals',
  },
];
