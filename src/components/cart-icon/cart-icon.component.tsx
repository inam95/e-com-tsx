import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg.svg";

import "./cart-icon.style.scss";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { StoreState } from "../../redux/root-reducer";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

interface CartIconStoreProps {
  itemCount?: number;
}
interface CartIconProps extends CartIconStoreProps {
  toggleCartHidden: Function;
}

class _CartIcon extends React.Component<CartIconProps> {
  static defaultProps = {
    toggleCartHidden: () => {}
  };

  render() {
    const { toggleCartHidden, itemCount } = this.props;
    return (
      <div className="cart-icon" onClick={() => toggleCartHidden()}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
      </div>
    );
  }
}

const mapDispatchToState = (dispatch: Dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector<
  StoreState,
  CartIconProps,
  CartIconStoreProps
>({
  itemCount: selectCartItemsCount
});

export const CartIcon = connect(mapStateToProps, mapDispatchToState)(_CartIcon);
