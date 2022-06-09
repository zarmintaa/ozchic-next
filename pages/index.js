import InspirationHome from "../components/home/InspirationHome";
import LookbookHome from "../components/home/LookbookHome";
import NewArrivalsHome from "../components/home/NewArrivalsHome";
import OzchicPeople from "../components/home/OzchicPeople";
import ShopByCategory from "../components/home/ShopByCategory";
import SliderHome from "../components/home/SliderHome";
import { Fragment } from "react";
import Seo from "../components/utils/Seo";

export default function Home() {
  return (
    <Fragment>
      <Seo
        description={"Come to my store for great apparel!"}
        url={"https://ozchic-next.vercel.app/"}
        title={"Ozchic Store"}
      />
      <SliderHome />
      <LookbookHome />
      <NewArrivalsHome />
      <ShopByCategory />
      <OzchicPeople />
      <InspirationHome />
    </Fragment>
  );
}
