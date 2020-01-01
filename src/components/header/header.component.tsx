import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg.svg";
import { CartIcon } from "../cart-icon/cart-icon.component";

import "./header.styles.scss";
import { auth } from "../../services/firebase/firebase.util";
import { UserAuthModel } from "../../models/Auth";
import { connect } from "react-redux";
import { StoreState } from "../../redux/root-reducer";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

interface HeaderStoreProps {
  currentUser?: UserAuthModel | null;
  hiddenCart?: boolean;
}

interface HeaderProps extends HeaderStoreProps {}

const _Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { currentUser, hiddenCart } = props;

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hiddenCart ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector<StoreState, HeaderProps>({
  currentUser: selectCurrentUser,
  hiddenCart: selectCartHidden
});

export const Header = connect(mapStateToProps)(_Header);
