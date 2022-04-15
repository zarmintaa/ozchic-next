import InspirationHome from "../components/home/InspirationHome";
import LookbookHome from "../components/home/LookbookHome";
import NewArrivalsHome from "../components/home/NewArrivalsHome";
import OzchicPeople from "../components/home/OzchicPeople";
import ShopByCategory from "../components/home/ShopByCategory";
import SliderHome from "../components/home/SliderHome";

export default function Home() {
  return (
    <div>
      <SliderHome />
      <LookbookHome />
      <NewArrivalsHome />
      <ShopByCategory />
      <OzchicPeople />
      <InspirationHome />
    </div>
  );
}
