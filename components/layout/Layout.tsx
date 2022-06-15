import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "../header";
type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = "TypeScript Next.js Stripe Example",
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Mukta:wght@300;400&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Header />
    {children}
  </>
);

export default Layout;
