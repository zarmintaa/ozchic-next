import InspirationHome from "../components/home/InspirationHome";
import LookbookHome from "../components/home/LookbookHome";
import NewArrivalsHome from "../components/home/NewArrivalsHome";
import OzchicPeople from "../components/home/OzchicPeople";
import ShopByCategory from "../components/home/ShopByCategory";
import SliderHome from "../components/home/SliderHome";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <SliderHome />
      <LookbookHome />
      <NewArrivalsHome />
      <ShopByCategory />
      <OzchicPeople />
      <InspirationHome />
    </Fragment>
  );
}
