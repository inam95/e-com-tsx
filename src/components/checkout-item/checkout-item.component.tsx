import React from "react";

import "./checkout-item.style.scss";
import { ItemModel } from "../../models/ShopPage";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.action";

interface CheckoutItemProps {
  cartItem: ItemModel;
  onClearItem: Function;
  addItem: Function;
  removeItem: Function;
}

const _CheckoutItem: React.FC<CheckoutItemProps> = (
  props: CheckoutItemProps
) => {
  const { name, imageUrl, price, quantity, id } = props.cartItem;
  const { onClearItem, removeItem, addItem, cartItem } = props;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => onClearItem(id)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onClearItem: (id: number) => dispatch(clearItemFromCart(id)),
  addItem: (item: ItemModel) => dispatch(addItem(item)),
  removeItem: (item: ItemModel) => dispatch(removeItem(item))
});

export const CheckoutItem = connect(null, mapDispatchToProps)(_CheckoutItem);
