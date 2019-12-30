import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg.svg";

import "./cart-icon.style.scss";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";

interface CartIconProps {
  toggleCartHidden: Function;
}

const _CartIcon: React.FC<CartIconProps> = (props: CartIconProps) => {
  const { toggleCartHidden } = props;
  return (
    <div className="cart-icon" onClick={() => toggleCartHidden()}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToState = (dispatch: Dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export const CartIcon = connect(null, mapDispatchToState)(_CartIcon);
