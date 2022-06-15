import React, { ReactNode } from "react";
import { CartProvider as Cart } from "use-shopping-cart";
import getStripe from "../utils/get-stripejs";
import * as config from "../config";

const CartProvider = ({ children }: { children: ReactNode }) => (
  <Cart
    mode="checkout-session"
    stripe={getStripe()}
    currency={config.CURRENCY}
  >
    <>{children}</>
  </Cart>
);

export default CartProvider;
