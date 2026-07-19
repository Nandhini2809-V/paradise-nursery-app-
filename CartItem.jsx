import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import { Link } from 'react-router-dom';

function CartItem() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total price
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  if (cartItems.length === 0) {
    return (
      <div style={{textAlign: 'center', padding: '50px'}}>
        <h2>Your Cart is Empty</h2>
        <Link to="/products">
          <button style={{padding: '10px 20px', background: 'green', color: 'white', border: 'none', borderRadius: '5px'}}>Continue Shopping</button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{padding: '20px'}}>
      <h1 style={{textAlign: 'center', color: 'green'}}>Shopping Cart</h1>
      {cartItems.map(item => (
        <div key={item.id} style={{
          display: 'flex', 
          alignItems: 'center', 
          border: '1px solid #ddd', 
          padding: '15px', 
          margin: '10px 0',
          borderRadius: '8px'
        }}>
          <img src={item.image} alt={item.name} style={{width: '100px', height: '100px', objectFit: 'cover', marginRight: '20px'}}/>
          <div style={{flex: 1}}>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
              <button onClick={() => handleDecrement(item)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncrement(item)}>+</button>
            </div>
          </div>
          <button 
            onClick={() => handleRemove(item.id)}
            style={{padding: '8px 15px', background: 'red', color: 'white', border: 'none', borderRadius: '5px'}}
          >
            Delete
          </button>
        </div>
      ))}

      <h2 style={{textAlign: 'right'}}>Total: ${totalAmount.toFixed(2)}</h2>
      
      <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
        <Link to="/products">
          <button style={{padding: '10px 20px', background: 'gray', color: 'white', border: 'none', borderRadius: '5px'}}>Continue Shopping</button>
        </Link>
        <button style={{padding: '10px 20px', background: 'green', color: 'white', border: 'none', borderRadius: '5px'}}>Checkout</button>
      </div>
    </div>
  );
}

export default CartItem;
