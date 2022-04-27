import Image from "next/image";
import Link from "next/link";
const InspirationHome = () => {
  return (
    <div className="bg-stone-100">
      <div className="flex items-center justify-center py-16 ">
        <h1 className="font-f-unna text-6xl">Inspiration</h1>
      </div>
      <div className="grid grid-cols-2 font-f-poppins+">
        <div className="w-full h-full ">
          {/*<img*/}
          {/*    src="/images/assets/static/woman-in-yellow-winter-jacket.png"*/}
          {/*    alt="inspiration"*/}
          {/*/>*/}
          <Image
            src="/images/assets/static/woman-in-yellow-winter-jacket.png"
            width={500}
            height={500}
            alt="inspiration"
            layout="responsive"
          />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-4xl py-10 px-20 text-center leading-normal">
            How to Improve Your Self Confidence
          </h2>
          <p className="px-24 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            facilisis neque finibus bibendum semper. Etiam nec urna gravida,
            elementum sapien dapibus, maximus eros. Donec non sem posuere,
            molestie tellus vel, volutpat nisl. Aenean lorem massa, molestie non
            libero a, posuere rutrum diam. Mauris scelerisque congue justo, at
            volutpat quam malesuada quis. Vivamus dictum volutpat ipsum, semper
            pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut facilisis neque finibus bibendum semper. Etiam nec urna gravida,
            elementum sapien dapibus, maximus eros. Donec non sem posuere,
            molestie tellus vel, volutpat nisl. Aenean lorem massa, molestie non
            libero a, posuere rutrum diam. Mauris scelerisque congue justo, at
            volutpat quam malesuada quis. Vivamus dictum volutpat ipsum, semper
            pulvinar...
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center py-12">
        <Link href={"/inspiration"} passHref>
          <button className="py-3 px-12 tracking-wider bg-white rounded-bl-lg rounded-tr-lg text-xl border-gray-900 border-2 font-semibold">
            Read More Inspiration
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InspirationHome;
