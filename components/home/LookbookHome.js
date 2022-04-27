import Image from "next/image";

const LookbookHome = () => {
  return (
    <section className="my-20">
      <div className="flex items-center justify-center my-20 ">
        <h1 className="font-f-unna text-6xl">LookBook</h1>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto items-center justify-between w-8/12 font-f-unna text-white gap-5">
        {/* Lookbook Card Home */}
        <div className="relative overflow-hidden flex items-center shadow-lg">
          {/*<img*/}
          {/*  className="w-full h-full"*/}
          {/*  src="./images/assets/static/lookbook/lookbook-home-1.png"*/}
          {/*  alt="lookbook"*/}
          {/*/>*/}
          <div className="w-full h-full">
            <Image
              src={"/images/assets/static/lookbook/lookbook-home-1.png"}
              alt="lookbook"
              width={500}
              height={620}
              layout="responsive"
            />
          </div>

          <div className="backdrop-brightness-90 bg-black/30 absolute w-full h-full"></div>
          <div className="absolute w-full bottom-10">
            <div className="w-9/12 mx-auto bottom-10 flex flex-col gap-10">
              <div className="font-f-unna">
                <h1 className="text-5xl">Unique style for your uniqeness.</h1>
              </div>
              <div className="lookbook__content--button font-f-poppins">
                <button className="py-4 px-16 tracking-wider bg-black rounded-bl-lg rounded-tr-lg text-xl">
                  GET THE LOOK
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card right */}
        <div className="relative overflow-hidden flex items-center shadow-lg">
          {/*<img*/}
          {/*  className="w-full h-full"*/}
          {/*  src="./images/assets/static/lookbook/lookbook-home-2.png"*/}
          {/*  alt="lookbook"*/}
          {/*/>*/}
          <div className="w-full h-full">
            <Image
              src={"/images/assets/static/lookbook/lookbook-home-2.png"}
              alt="lookbook"
              width={500}
              height={620}
              layout="responsive"
            />
          </div>
          <div className="backdrop-brightness-90 bg-black/30 absolute w-full h-full"></div>
          <div className="absolute w-full bottom-10">
            <div className="w-9/12 mx-auto bottom-10 flex flex-col gap-10">
              <div className="font-f-unna">
                <h1 className="text-5xl">After all we’ll be back to basic.</h1>
              </div>
              <div className="lookbook__content--button font-f-poppins">
                <button className="py-4 px-16 tracking-wider bg-black rounded-bl-lg rounded-tr-lg text-xl">
                  GET THE LOOK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LookbookHome;
