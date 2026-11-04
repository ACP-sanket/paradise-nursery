import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from './Navbar';

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  selectCartItems,
  selectCartTotal
} from '../redux/CartSlice';

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotal);

  const [checkoutMessage, setCheckoutMessage] = useState('');

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="cart-page">

      <Navbar />

      <section className="cart-header">
        <p className="cart-tagline">YOUR GREEN COLLECTION</p>
        <h1>Shopping Cart</h1>
        <p>Review your plants and make your space greener.</p>
      </section>

      <main className="cart-container">

        {cartItems.length === 0 ? (

          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>

            <h2>Your cart is empty</h2>

            <p>
              Looks like you haven't added any plants yet.
              Explore our collection and find your favourite plants.
            </p>

            <Link to="/plants" className="continue-shopping-btn">
              Continue Shopping →
            </Link>
          </div>

        ) : (

          <div className="cart-layout">

            <div className="cart-products">

              <div className="cart-products-heading">
                <h2>Your Selected Plants</h2>
                <span>{totalItems} items</span>
              </div>

              {cartItems.map(item => (

                <article className="cart-product-card" key={item.id}>

                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-product-image"
                  />

                  <div className="cart-product-details">

                    <h3>{item.name}</h3>

                    <p className="cart-category">
                      {item.category}
                    </p>

                    <p className="cart-unit-price">
                      Unit Price: ₹{item.price}
                    </p>

                    <div className="quantity-controls">

                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        disabled={item.quantity <= 1}
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        +
                      </button>

                    </div>

                  </div>

                  <div className="cart-product-total">

                    <strong>
                      ₹{item.price * item.quantity}
                    </strong>

                    <button
                      className="delete-item-btn"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>

                  </div>

                </article>

              ))}

            </div>

            <aside className="cart-summary">

              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Total Items</span>
                <strong>{totalItems}</strong>
              </div>

              <div className="summary-row">
                <span>Subtotal</span>
                <strong>₹{totalAmount.toLocaleString('en-IN')}</strong>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-total">
                <span>Total Amount</span>
                <strong>
                  ₹{totalAmount.toLocaleString('en-IN')}
                </strong>
              </div>

              <button
                className="checkout-btn"
                onClick={() => setCheckoutMessage('Coming Soon! Thank you for shopping with Paradise Nursery.')}
              >
                Proceed to Checkout
              </button>

              {checkoutMessage && (
                <p className="checkout-message">
                  {checkoutMessage}
                </p>
              )}

              <Link to="/plants" className="continue-shopping-link">
                ← Continue Shopping
              </Link>

            </aside>

          </div>

        )}

      </main>

    </div>
  );
}

export default CartItem;