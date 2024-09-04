
import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import Header from 'Components/Header';
export default function Order() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { cart, clearCart, removeFromCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState({});
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!customerName) newErrors.customerName = 'Name is required';
    if (!phone) newErrors.phone = 'Phone number is required';
    if (!customerAddress) newErrors.customerAddress = 'Address is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOrderClick = () => {
    if (validateForm()) {
      handleOrder();
      setCustomerName('');
      setPhone('');
      setCustomerAddress('');
      setErrors({});
    }
  };

  const handleOrder = () => {
    setOrderDetails({
      name: customerName,
      address: customerAddress,
      phone: phone,
      totalPrice,
    });
    setShowModal(true);
  };

  const handleConfirmOrder = () => {
    if (clearCart) {
      clearCart();
    }
    setShowModal(false);
  };

  const totalPrice = cart.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', '')) || 0;
    return total + price;
  }, 0);

  const handleRemoveClick = (index) => {
    removeFromCart(index);
  };

  return (
    <div>
      <Header heading="Order Now" />
      <section className='mb-5'>
        <div className="container mt-5">
          {cart.length === 0 ? (
            <div className="text-center mt-5"><h3>No items in cart.</h3></div>
          ) : (
            <>
              <h1 className="text-center mb-3">Order Summary</h1>
              <p className='text-center mt-3'>-----•☕︎•------</p>
              <div className="row">
                <div className="col-12 col-md-8 mx-auto">
                  <ul className="list-group">
                    {cart.map((item, index) => (
                      <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                          <h5>{item.heading}</h5>
                          <p>{item.price}</p>
                        </div>
                        <img src={item.img} alt={item.heading} style={{ width: '50px', height: '50px' }} />
                        <button className="btn btn-danger btn-sm ml-3" onClick={() => handleRemoveClick(index)}>
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <h3>Customer Details</h3>
                    <div className="form-group">
                      <label htmlFor="customerName">Name:</label>
                      <input
                        type="text"
                        id="customerName"
                        className={`form-control ${errors.customerName ? 'is-invalid' : ''}`}
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                      />
                      {errors.customerName && <div className="text-danger">{errors.customerName}</div>}
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="phone">Phone Number:</label>
                      <input
                        type="text"
                        id="phone"
                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      {errors.phone && <div className="text-danger">{errors.phone}</div>}
                    </div>
                    <div className="form-group mt-3">
                      <label htmlFor="customerAddress">Address:</label>
                      <input
                        type="text"
                        id="customerAddress"
                        className={`form-control ${errors.customerAddress ? 'is-invalid' : ''}`}
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                      />
                      {errors.customerAddress && <div className="text-danger">{errors.customerAddress}</div>}
                    </div>
                    <div className="mt-4">
                      <h3 className="total-price">Total Price: ${totalPrice.toFixed(2)}</h3>
                      <button className="btn mt-4" onClick={handleOrderClick}>
                        Done Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        {/* Modal for order confirmation */}
        <div
          className={`modal fade ${showModal ? 'show' : ''}`}
          style={{ display: showModal ? 'block' : 'none' }}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="orderModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="orderModalLabel">Order Confirmation</h5>
                <button
                  type="button"
                  className="close btn"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Order placed by: {orderDetails.name}</p>
                <p>Phone Number: {orderDetails.phone}</p>
                <p>Address: {orderDetails.address}</p>
                <p>Total Price: ${orderDetails.totalPrice ? orderDetails.totalPrice.toFixed(2) : '0.00'}</p>
                <p>Your order has been successfully placed!</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn"
                  data-dismiss="modal"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button type="button" className="btn" onClick={handleConfirmOrder}>
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}