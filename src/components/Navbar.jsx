import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../redux/CartSlice';

function Navbar() {
  const cartCount = useSelector(selectCartCount);

  return (
    <header className="shop-navbar">
      <Link to="/" className="shop-brand">
        <span>❀</span> Paradise Nursery
      </Link>

      <nav className="shop-nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>

        <Link to="/cart" className="cart-link">
          <span className="cart-icon">🛒</span>
          Cart
          <span className="cart-count">{cartCount}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;