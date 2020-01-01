import React from "react";

import "./checkout-item.style.scss";
import { ItemModel } from "../../models/ShopPage";

interface CheckoutItemProps {
  cartItem: ItemModel;
}

export const CheckoutItem: React.FC<CheckoutItemProps> = (
  props: CheckoutItemProps
) => {
  const { name, imageUrl, price, quantity } = props.cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};
