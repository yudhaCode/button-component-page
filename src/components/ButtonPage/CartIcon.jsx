import React from "react";
import CartIconImg from "../../assets/add_shopping_cart_black_24dp.svg";

const CartIcon = ({ cartIconBool, cartIconPoisition, margin }) => {
  return (
    <>
      <img src={CartIconImg} className={margin} alt="Cart Icon" />
    </>
  );
};

export default CartIcon;
