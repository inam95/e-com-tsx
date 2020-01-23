import React from 'react';

import { ReactComponent as Logo } from '../../assets/crown.svg.svg';
import { CartIcon } from '../cart-icon/cart-icon.component';

import { auth } from '../../services/firebase/firebase.util';
import { UserAuthModel } from '../../models/Auth';
import { connect } from 'react-redux';
import { StoreState } from '../../redux/root-reducer';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';

interface HeaderStoreProps {
  currentUser?: UserAuthModel | null;
  hiddenCart?: boolean;
}

interface HeaderProps extends HeaderStoreProps {}

const _Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { currentUser, hiddenCart } = props;

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo"></Logo>
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hiddenCart ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector<StoreState, HeaderProps>({
  currentUser: selectCurrentUser,
  hiddenCart: selectCartHidden
});

export const Header = connect(mapStateToProps)(_Header);
