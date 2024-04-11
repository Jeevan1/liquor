import React from "react";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { deleteCart, updateCart } from "../../store/slice/cartSlice";

function Checkout() {
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
    <div className="checkout">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="checkout__left">
              <div className="checkout__left__image">
                <img src="./assets/images/cart.png" alt="cart" />
              </div>
              <div className="checkout__left__content">
                <h4>Your shopping cart</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem adipisci quaerat facere illo enim natus
                  delectus alias eligendi, harum architecto quia, perspiciatis
                  laborum vel odit?
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="checkout__right">
              <div className="checkout__right__content ">
                <div className="checkout__right__content__items">
                  {cartItems.length !== 0 ? (
                    cartItems.map((item) => (
                      <div className="checkout__right__content__item" key={item.id}>
                        <div className="checkout__right__content__item__image">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div className="checkout__right__content__item__info ">
                          <h6 className="checkout__right__content__item__name">
                            {item.name}
                          </h6>
                          <p className="checkout__right__content__item__type">{item.type}</p>
                          <div className=" d-flex align-content-center justify-content-between">
                            <div className="checkout__right__content__item__input d-flex align-items-center">
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
                            <h6 className="checkout__right__content__item__price">
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
                    <h4 className="py-5 text-center">No Items </h4>
                  )}
                </div>
              </div>
              <div className="checkout__right__footer">
                <div className="subtotal">
                  <h5>Subtotal:</h5>
                  <h6>Rs.{totalAmount.toFixed(2)}</h6>
                </div>
                <div className="checkout__button">
                  <button>Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
