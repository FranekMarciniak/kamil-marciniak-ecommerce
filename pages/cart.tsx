import React from "react";
import { NextPage } from "next";
import Layout from "../components/layout/Layout";
import CartSummary from "../components/cart/CartSummary";
import CartProvider from "../providers/CartProvider";
const CartPage: NextPage = () => {
  return (
    <Layout title="Shopping Cart | Next.js + TypeScript Example">
      <div className="page-container">
        <h1>Shopping Cart</h1>
        <CartProvider>
          <CartSummary />
        </CartProvider>
      </div>
    </Layout>
  );
};

export default CartPage;
