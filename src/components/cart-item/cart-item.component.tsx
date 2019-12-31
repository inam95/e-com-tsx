import React from "react";

import "./cart-item.style.scss";
import { ItemModel } from "../../models/ShopPage";

interface CartItemProps {
  item: ItemModel;
}

export const CartItem: React.FC<CartItemProps> = (props: CartItemProps) => {
  const { imageUrl, price, name, quantity } = props.item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};
