import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../Pages/Auth/CartContext';
export default function Header(props) {
  const { cart } = useCart();
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Café Crave</Link>
          <button
            className="navbar-toggler position-relative"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            {cart.length > 0 && (
              <span className="badge bg-danger">
                {cart.length}
                <span className="visually-hidden">unread items</span>
              </span>
            )}
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu">Menu</Link>
              </li>
              <li className="nav-item position-relative">
                <Link className="nav-link" to="/order">
                  Cart
                  {cart.length > 0 && (
                    <span className="badge bg-danger">
                      {cart.length}
                      <span className="visually-hidden">unread items</span>
                    </span>
                  )}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Low Header */}
      <div className='bg-header header  ' >
        <div className="container">
          <div className="row no-gutters ">
            <div className="col title ">
              <div className=" header-text ">
                <h1 className='text-center' style={{ color: "#c24244" }}>{props.brand}</h1>
                <h1 className='text-center text-light'>{props.heading}</h1>
                <p className='text-center'>{props.para} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}