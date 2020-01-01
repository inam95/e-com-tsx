import React from "react";

import "./checkout.style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { StoreState } from "../../redux/root-reducer";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selector";
import { ItemModel } from "../../models/ShopPage";
import { CartItem } from "../../components/cart-item/cart-item.component";
import { CheckoutItem } from "../../components/checkout-item/checkout-item.component";

interface CheckoutPageStoreProps {
  cartItems: ItemModel[];
  total: number;
}

interface CheckoutPageProps extends CheckoutPageStoreProps {}

const _CheckoutPage: React.FC<CheckoutPageProps> = (
  props: CheckoutPageProps
) => {
  const { cartItems, total } = props;

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
        <div className="header-block"></div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector<StoreState, CheckoutPageProps>(
  {
    cartItems: selectCartItems,
    total: selectCartTotal
  }
);

export const CheckoutPage = connect(mapStateToProps)(_CheckoutPage);
