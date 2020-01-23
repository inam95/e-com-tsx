import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: any;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
}

export const CustomButton: React.FC<CustomButtonProps> = (
  props: CustomButtonProps
) => {
  const { children, ...otherProps } = props;

  return (
    <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
  );
};
