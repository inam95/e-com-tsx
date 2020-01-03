import React from "react";

import "./cart-dropdown.style.scss";
import { CustomButton } from "../cutom-button/custom-button.component";
import { connect } from "react-redux";
import { StoreState } from "../../redux/root-reducer";
import { ItemModel } from "../../models/ShopPage";
import { CartItem } from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Dispatch } from "redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";

interface CartDropdownStoreProps {
  cartItems: ItemModel[];
}

interface CartDropdownProps extends CartDropdownStoreProps {
  toggleCartHidden: Function;
}

class CartDropdown extends React.Component<
  CartDropdownProps & RouteComponentProps<{}> & { dispatch: Dispatch }
> {
  static defaultProps = {
    toggleCartHidden: () => {},
    cartItems: []
  };

  render() {
    const { cartItems, history, dispatch } = this.props;
    return (
      <div className="cart-dropdown">
        <div className="cart-items">
          {cartItems.length ? (
            cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          ) : (
            <span className="empty-message">Your cart is empty</span>
          )}
        </div>
        <CustomButton
          onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden());
          }}
        >
          GO TO CHECKOUT
        </CustomButton>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector<
  StoreState,
  CartDropdownProps,
  CartDropdownStoreProps
>({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
