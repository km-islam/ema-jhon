import { useEffect, useState } from "react";
import Product from "./Product";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Banner from "../Banner/Banner";

import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch Data from Db
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Get Data from Local Storage
  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  // Handel Cart
  const handelCart = (item) => {
    let newCart = [];
    const isExists = cart.find((product) => product.id === item.id);
    if (!isExists) {
      item.quantity = 1;
      newCart = [...cart, item];
    } else {
      const rest = cart.filter((product) => product.id !== item.id);
      isExists.quantity = isExists.quantity + 1;
      newCart = [...rest, isExists];
    }
    setCart(newCart);
    addToDb(item.id);
  };

  const handelClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <>
      <Banner />
      <div className="shop">
        <div className="container">
          <div className="shop-container">
            <div className="shop-products">
              {products.map((product) => (
                <Product
                  product={product}
                  key={product.id}
                  handler={handelCart}
                />
              ))}
            </div>

            {/* Cart */}

            <Cart
              cart={cart}
              handelClearCart={handelClearCart}
              btnName={"View Cart"}
              route={"order"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
