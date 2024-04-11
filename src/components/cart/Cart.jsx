import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { deleteCart, updateCart } from "../../store/slice/cartSlice";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { Link } from "react-router-dom";

function Cart({ showHide, status }) {
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  let totalAmount = 0;
  cartItems.forEach((sum) => {
    const qty = sum.quantity;
    const price = sum.price;
    const total = qty * price;
    totalAmount += total;
  });


  return (
    <div className="cart__popup border shadow shadow-sm">
      <div className="cart__popup__header d-flex justify-content-between align-items-center">
        <h4>My Cart</h4>
        <RxCross2 className="icon" onClick={() => showHide(!status)} />
      </div>
      <div className="cart__popup__content ">
        <div className="cart__popup__items">
          {cartItems.length !== 0 ? (
            cartItems.map((item) => (
              <div className="cart__popup__item" key={item.id}>
                <div className="cart__popup__item__image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart__popup__item__info ">
                  <h6 className="cart__popup__item__name">{item.name}</h6>
                  <p className="cart__popup__item__type">{item.type}</p>
                  <div className=" d-flex align-content-center justify-content-between">
                    <div className="cart__popup__item__input d-flex align-items-center">
                      <CiSquareMinus
                        className="icon"
                        onClick={() =>
                          item.quantity > 1 &&
                          dispatch(
                            updateCart({
                              id: item.id,
                              value: item.quantity - 1,
                            })
                          )
                        }
                      />
                      <input
                        className=""
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          dispatch(
                            updateCart({
                              id: item.id,
                              value: e.target.value,
                            })
                          )
                        }
                      />
                      <CiSquarePlus
                        className="icon"
                        onClick={() =>
                          dispatch(
                            updateCart({
                              id: item.id,
                              value: item.quantity + 1,
                            })
                          )
                        }
                      />
                    </div>

                    <p>{item.quantity}</p>
                    <h6 className="cart__popup__item__price">
                      Rs.{item.price * item.quantity}
                    </h6>
                  </div>
                  <div className="remove__cart__item">
                    <RxCross2
                      className="icon"
                      onClick={() => dispatch(deleteCart(item.id))}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h4 className="py-5 text-center">No Items in Cart </h4>
          )}
        </div>
      </div>
      <div className="cart__popup__footer">
        <div className="subtotal">
          <h5>Subtotal:</h5>
          <h6>Rs.{totalAmount.toFixed(2)}</h6>
        </div>
        <div className="checkout__button" onClick={() => showHide(false)}>
          <Link to="/checkout" className="link">Checkout</Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
