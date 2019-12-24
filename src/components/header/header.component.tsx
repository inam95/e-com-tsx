import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg.svg";
import "./header.styles.scss";
import { auth } from "../../services/firebase/firebase.util";
import { UserAuthModel } from "../../models/Auth";

interface HeaderProps {
  currentUser: UserAuthModel | null;
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { currentUser } = props;
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
};
