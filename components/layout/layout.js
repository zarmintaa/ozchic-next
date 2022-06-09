import Navbar from "./Navbar";
import Footer from "./Footer";
import CartProvider from "../../store/CartProvider";
import { Fragment } from "react";

const Layout = (props) => {
  return (
    <Fragment>
      <CartProvider>
        <Navbar />
        <main>{props.children}</main>
        <Footer />
      </CartProvider>
    </Fragment>
  );
};

export default Layout;
