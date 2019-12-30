import React from "react";

import "./cart-dropdown.style.scss";
import { CustomButton } from "../cutom-button/custom-button.component";

interface CartDropdownProps {}

export const CartDropdown: React.FC<CartDropdownProps> = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  );
};
