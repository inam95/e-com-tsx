import React from "react";

import "./custom-button.style.scss";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: any;
  isGoogleSignIn?: boolean;
}

export const CustomButton: React.FC<CustomButtonProps> = (
  props: CustomButtonProps
) => {
  const { children, isGoogleSignIn, ...otherProps } = props;
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
