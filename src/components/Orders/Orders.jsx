import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import OrderProduct from "./OrderProduct";
import { useState } from "react";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handelRemoveFromCart = (id) => {
    const remainingCart = cart.filter((c) => c.id !== id);
    setCart(remainingCart);
    removeFromDb(id);
  };

  const handelClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div className="container">
      <div className="order-container">
        <div className="order-content">
          {cart.map((product) => (
            <OrderProduct
              key={product.id}
              product={product}
              handelRemoveFromCart={handelRemoveFromCart}
            />
          ))}
        </div>
        <div className="cart-container">
          <Cart
            cart={cart}
            handelClearCart={handelClearCart}
            btnName={"checkout"}
            route={"checkout"}
          />
        </div>
      </div>
    </div>
  );
};

export default Orders;
