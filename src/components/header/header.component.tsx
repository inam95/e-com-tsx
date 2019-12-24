import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg.svg";
import "./header.styles.scss";
import { auth } from "../../services/firebase/firebase.util";
import { UserAuthModel } from "../../models/Auth";
import { connect } from "react-redux";
import { StoreState } from "../../redux/root-reducer";

interface HeaderStoreProps {
  currentUser: UserAuthModel | null;
}

interface HeaderProps extends HeaderStoreProps {}

class _Header extends React.Component<HeaderProps> {
  constructor(props: HeaderProps) {
    super(props);

    this.state = {};
  }

  static defaultProps: HeaderProps = {
    currentUser: null
  };
  render() {
    const { currentUser } = this.props;
    console.log(currentUser);
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  return {
    user: state.user.currentUser
  };
};

export const Header = connect(mapStateToProps)(_Header);
