import { Fragment } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import Head from "next/head";

const Layout = (props) => {
  return (
    <Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </Head>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
