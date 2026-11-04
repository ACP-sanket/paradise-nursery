import { Routes, Route } from 'react-router-dom';

import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';

import './App.css';

function HomePage() {
  return (
    <main className="website">

      <section className="hero" id="home">

        <header className="navbar">
          <a href="/" className="brand">
            <span className="brand-icon">❀</span>
            <span>Paradise <strong>Nursery</strong></span>
          </a>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="/plants">Shop Plants</a>
          </nav>
        </header>

        <div className="hero-content">

          <p className="hero-tagline">
            BRING NATURE INTO YOUR HOME
          </p>

          <h1>
            A Little Green
            <br />
            Makes Life <span>Better.</span>
          </h1>

          <p className="hero-description">
            Transform your living space into a peaceful green sanctuary.
            Discover beautiful indoor plants that bring freshness,
            positivity and happiness into your everyday life.
          </p>

          <a href="/plants" className="get-started-btn">
            Get Started <span>→</span>
          </a>

          <div className="hero-note">
            <span>✦</span>
            GROW YOUR OWN LITTLE PARADISE
          </div>

        </div>

        <div className="hero-bottom">
          <span>01 — NATURAL BEAUTY</span>
          <span>02 — FRESH LIVING</span>
          <span>03 — HAPPY SPACES</span>
        </div>

      </section>

      <AboutUs />

    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}

export default App;