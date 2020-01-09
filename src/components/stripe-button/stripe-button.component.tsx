import React from "react";
import StripeCheckout from "react-stripe-checkout";

interface StripeCheckoutProps {
  price: number;
}

export const StripeCheckoutButton: React.FC<StripeCheckoutProps> = ({
  price
}: StripeCheckoutProps) => {
  const priceFroStrpe = price * 100;
  const publishableKey = "pk_live_zxPlSCXn4MBhXd00VBv1gFO600pQuPc863";

  const onToken = (token: any) => {
    console.log(token);
    alert("Success");
  };
  return (
    <StripeCheckout
      label="PAy Now"
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
