import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import plants from '../data/plants';
import { addToCart, selectCartItems } from '../redux/CartSlice';

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const categories = [...new Set(plants.map(plant => plant.category))];

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-page">

      <Navbar />

      <section className="products-header">
        <p className="products-tagline">GROW YOUR OWN PARADISE</p>
        <h1>Find Your Perfect Plant</h1>
        <p>
          Bring nature home with our handpicked collection
          of beautiful indoor plants.
        </p>
      </section>

      <main className="products-container">

        {categories.map(category => {

          const categoryPlants = plants.filter(
            plant => plant.category === category
          );

          return (
            <section className="category-section" key={category}>

              <h2>{category}</h2>

              <div className="plant-grid">

                {categoryPlants.map(plant => {

                  const isAdded = cartItems.some(
                    item => item.id === plant.id
                  );

                  return (
                    <article className="plant-card" key={plant.id}>

                      <div className="plant-image-wrap">
                        <img
                          src={plant.image}
                          alt={plant.name}
                          className="plant-image"
                          loading="lazy"
                        />
                      </div>

                      <div className="plant-info">

                        <h3>{plant.name}</h3>

                        <p className="plant-description">
                          {plant.description}
                        </p>

                        <div className="plant-card-bottom">

                          <span className="plant-price">
                            ₹{plant.price}
                          </span>

                          <button
                            className={`add-cart-btn ${isAdded ? 'added' : ''}`}
                            disabled={isAdded}
                            onClick={() => handleAddToCart(plant)}
                          >
                            {isAdded ? 'Added ✓' : 'Add to Cart'}
                          </button>

                        </div>

                      </div>

                    </article>
                  );
                })}

              </div>

            </section>
          );
        })}

      </main>

    </div>
  );
}

export default ProductList;