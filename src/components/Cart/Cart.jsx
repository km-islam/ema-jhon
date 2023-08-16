/* eslint-disable react/prop-types */
import React from "react";
import { Link, } from "react-router-dom";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = ({ cart, handelClearCart, btnName ,route}) => {
  // Cart calculation
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    shipping = shipping + product.shipping * product.quantity;
    total = total + product.price * product.quantity;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;
  return (
    <>
      <div className="product-carts">
        <div>
          <h3>Order Summary</h3>
          <ul className="cart-info">
            <li>
              <small>Selected Items:</small>
              <span>{quantity}</span>
            </li>
            <li>
              <small>Total Price:</small>
              <span>${total}</span>
            </li>
            <li>
              <small>Shipping Charge:</small>
              <span>${shipping}</span>
            </li>
            <li>
              <small>Tax:</small>
              <span>${tax}</span>
            </li>
            <li>
              <small>Grand Total:</small>
              <span>${grandTotal}</span>
            </li>
          </ul>

          <div className="btn-group">
            <button onClick={handelClearCart}>
              Clear Cart <RiDeleteBin6Line />
            </button>
            <Link to={route} className="checkout-btn">
              {btnName} <BsArrowRightCircleFill />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
