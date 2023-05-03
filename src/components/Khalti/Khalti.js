import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import config from "./khaltiConfig";
const Khalti = ({ amount }) => {
  let checkout = new KhaltiCheckout(config);
  return (
    <div>
      <p
        onClick={() => {
          checkout.show({ amount: amount });
        }}
      >
        Choose Plan
      </p>
    </div>
  );
};

export default Khalti;
