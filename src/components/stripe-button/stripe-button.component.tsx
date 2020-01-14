import React from "react";
import StripeCheckout from "react-stripe-checkout";

interface StripeCheckoutProps {
  price: number;
}

export const StripeCheckoutButton: React.FC<StripeCheckoutProps> = ({
  price
}: StripeCheckoutProps) => {
  const priceFroStrpe = price * 100;
  const publishableKey = "pk_test_BhXFkrq8aY1gPC7GHbAnI4Wi00XpVRBMQY";

  const onToken = (token: any): void => {
    console.log(token);
    alert("Success");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="MY SHOP Ltd"
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceFroStrpe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
};
