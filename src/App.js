import React, { useState, useEffect } from 'react';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.scss';
import Auth from 'Pages/Auth';
import Footer from 'Components/Footer';
import { CartProvider } from 'Pages/Auth/CartContext';
import Loader from 'Components/Loader';

function App() {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <CartProvider>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Auth cart={cart} addToCart={addToCart} />
          <Footer />
        </>
      )}
    </CartProvider>
  );
}
export default App;