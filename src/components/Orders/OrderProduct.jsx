/* eslint-disable react/prop-types */
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const OrderProduct = ({ product, handelRemoveFromCart }) => {
  console.log(product);
  return (
    <div className="order-product">
      <div className="order-img">
        <img src={product.img} alt="" />
      </div>
      <div className="order-product-content">
        <div>
          <h4>{product.name}</h4>
          <p>Price:{product.price}</p>
          <p>Quantity:{product.quantity}</p>
        </div>
        <button onClick={() => handelRemoveFromCart(product.id)}>
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};

export default OrderProduct;
