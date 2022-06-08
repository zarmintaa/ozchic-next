import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";
import CartProvider from "../../store/CartProvider";

const Layout = (props) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          strategy="lazyOnload"
        />
      </Head>
      <CartProvider>
        <Navbar />
        <main>{props.children}</main>
        <Footer />
      </CartProvider>
    </>
  );
};

export default Layout;
