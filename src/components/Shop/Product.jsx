/* eslint-disable react/prop-types */

import { FaCartPlus } from "react-icons/fa";
const Product = ({ product, handler }) => {
  const { name, seller, price, img, ratings, category } = product;

  return (
    <>
      <div className="product">
        <div>
          <img src={img} alt=" " />
        </div>

        <div className="product-info">
          <small>{category}</small>
          <h4>{name}</h4>
          <span>Price : ${price}</span>
          <div className="mt-5">
            <p>Manufacture: {seller}</p>
            <p>Rating: {ratings} Stars </p>
          </div>
        </div>
        <button className="addtocart" onClick={() => handler(product)}>
          Add to Cart
          <span>
            <FaCartPlus />
          </span>
        </button>
      </div>
    </>
  );
};

export default Product;
