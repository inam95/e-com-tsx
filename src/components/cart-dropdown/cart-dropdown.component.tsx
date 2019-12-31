import React from "react";

import "./cart-dropdown.style.scss";
import { CustomButton } from "../cutom-button/custom-button.component";
import { connect } from "react-redux";
import { StoreState } from "../../redux/root-reducer";
import { ItemModel } from "../../models/ShopPage";
import { CartItem } from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

interface CartDropdownStoreProps {
  cartItems: ItemModel[];
}

interface CartDropdownProps extends CartDropdownStoreProps {}

const _CartDropdown: React.FC<CartDropdownProps> = (
  props: CartDropdownProps
) => {
  const { cartItems } = props;

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector<StoreState, CartDropdownProps>(
  {
    cartItems: selectCartItems
  }
);

export const CartDropdown = connect(mapStateToProps)(_CartDropdown);
