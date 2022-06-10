import Image from "next/image";
import Seo from "../components/utils/Seo";
import { Fragment } from "react";
const Inspiration = () => {
  const image1 =
    "/images/assets/static/inspiration/street-photography-of-woman-wearing-blue-coat.png";
  return (
    <Fragment>
      <Seo
        description={
          "Come to my store and get apparel for our inspiration catalogue."
        }
        url={"https://ozchic-store.vercel.app/inspiration"}
        title={"Ozchic Store | Inspiration"}
      />
      <div className="grid lg:grid-cols-2 px-5 lg:px-0 my-10 min-h-screen">
        <Image
          src={image1}
          height={720}
          width={720}
          alt="inspiration"
          className="object-cover w-full h-full"
          layout="responsive"
        />
        <div className="px-5 lg:px-36">
          <h1 className="font-semibold font-f-poppins text-3xl text-slate-700 mt-20 leading-relaxed">
            Here are the tittle of the article you write for your site
          </h1>
          <div className="flex gap-2 mt-5">
            <Image
              src="/images/assets/static/inspiration/clock.svg"
              alt="clock"
              width={20}
              height={20}
              layout="responsive"
            />
            <time>June 30 2020</time>
          </div>
          <p className="text-slate-900 mt-5 text-lg leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            facilisis neque finibus bibendum semper. Etiam nec urna gravida,
            elementum sapien dapibus, maximus eros. Donec non sem posuere,
            molestie tellus vel, volutpat nisl. Aenean lorem massa, molestie non
            libero a, posuere rutrum diam. Mauris scelerisque congue justo,
          </p>
          <p className="text-slate-900 mt-5 text-lg leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            facilisis neque finibus bibendum semper. Etiam nec urna gravida,
            elementum sapien dapibus, maximus eros. Donec non sem posuere,
            molestie tellus vel, volutpat nisl. Aenean lorem massa, molestie non
            libero a, posuere rutrum diam. Mauris scelerisque congue justo,
          </p>
          <button className="mt-10 bg-white hover:bg-gray-200 text-slate-900 px-10 py-2 rounded-md border-2 font-f-poppins font-semibold border-slate-900">
            Read More
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Inspiration;
