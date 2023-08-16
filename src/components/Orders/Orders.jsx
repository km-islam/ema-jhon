import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import OrderProduct from "./OrderProduct";
import { useState } from "react";
import { removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handelRemoveFromCart = (id) => {
    const remainingCart = cart.filter((c) => c.id !== id);
    setCart(remainingCart);
    removeFromDb(id);
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
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Orders;
