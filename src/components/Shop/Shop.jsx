import { useEffect, useState } from "react";
import "./shop.css";
import Product from "./Product";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

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
                <button>
                  Clear Cart <RiDeleteBin6Line />{" "}
                </button>
                <button>
                  Check Out <BsArrowRightCircleFill />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
