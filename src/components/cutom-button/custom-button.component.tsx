import React from "react";

import "./custom-button.style.scss";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: any;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
}

export const CustomButton: React.FC<CustomButtonProps> = (
  props: CustomButtonProps
) => {
  const { children, isGoogleSignIn, inverted, ...otherProps } = props;
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
