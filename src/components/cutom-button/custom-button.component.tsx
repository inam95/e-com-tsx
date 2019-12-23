import React from "react";

import "./custom-button.style.scss";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: any;
}

export const CustomButton: React.FC<CustomButtonProps> = (
  props: CustomButtonProps
) => {
  const { children, ...otherProps } = props;
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};
