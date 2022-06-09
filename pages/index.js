import InspirationHome from "../components/home/InspirationHome";
import LookbookHome from "../components/home/LookbookHome";
import NewArrivalsHome from "../components/home/NewArrivalsHome";
import OzchicPeople from "../components/home/OzchicPeople";
import ShopByCategory from "../components/home/ShopByCategory";
import SliderHome from "../components/home/SliderHome";
import { Fragment } from "react";
import Head from "next/head";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Ozchic App</title>
        <meta
          name="description"
          content="Come to my store for great apparel!"
        />
        <meta property="og:title" content="Ozchic Store" />
        <meta
          property="og:description"
          content="Come to my store for great apparel!"
        />
        <meta property="og:url" content="https://ozchic-next.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>
      <SliderHome />
      <LookbookHome />
      <NewArrivalsHome />
      <ShopByCategory />
      <OzchicPeople />
      <InspirationHome />
    </Fragment>
  );
}
