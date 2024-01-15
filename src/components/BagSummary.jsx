import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { emptyBag } from "../store/slice/bag-slice";
import { useNavigate } from "react-router-dom";

const BagSummary = () => {
  const bagItems = useSelector((state) => state.bagItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const CONVENIENCE_FEES = 99;

  let totalPrice = 0;
  let totalDiscount = 0;
  for (let i = 0; i < bagItems.length; i++) {
    totalPrice += bagItems[i].original_price;
    totalDiscount += bagItems[i].original_price - bagItems[i].current_price;
  }
  let finalPayment = totalPrice - totalDiscount + CONVENIENCE_FEES;

  const handlePlaceOrder = () => {
    alert("Your Order Has Been Placed Enjoy Your Day!");
    dispatch(emptyBag());
    navigate("/");
  };

  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS {bagItems.length} Items{" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalPrice}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">
            {bagItems.length > 0 ? "₹99" : 0}
          </span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">
            ₹{bagItems.length > 0 ? finalPayment : 0}
          </span>
        </div>
      </div>
      {bagItems.length > 0 ? (
        <button className="btn-place-order">
          <div className="css-xjhrni" onClick={handlePlaceOrder}>
            PLACE ORDER
          </div>
        </button>
      ) : null}
    </>
  );
};

export default BagSummary;
