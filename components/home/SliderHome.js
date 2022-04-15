const SliderHome = () => {
  return (
    <section className="min-h-screen">
      <div className="grid grid-cols-slider-top">
        <div className=".content__item--left">
          <img
            className="w-full pb-5"
            src="./images/assets/static/slider/1/slider_image_1-left.png"
            alt="slider"
          />
        </div>
        <div className="flex flex-col justify-center items-center bg-black text-white">
          <div className="flex flex-col w-2/4">
            <h1 className="font-f-unna text-center whitespace-nowrap inline text-10xl font-semibold">
              5%
            </h1>
            <h3 className="font-f-unna text-left text-6xl font-extralight">
              of your purchase
            </h3>
            <p className="pt-5 pb-2 text-lg mt-2 font-f-poppins">
              will be donated to the orhpanage.
            </p>
          </div>
          <div className="mt-12 font-f-poppins">
            <button className="py-2 px-16 bg-white text-black font-semibold text-lg rounded-bl-lg rounded-tr-lg">
              Order Now
            </button>
          </div>
        </div>
        <div className=".content__item--right">
          <div className="pt-16 px-10 font-f-poppins">
            <hr className="border bg-black border-solid border-black mb-6" />
            <p className=" ">
              A well made shawls in nude shade color to make you #staychic along
              your busy day.
            </p>
          </div>
          <img
            className="object-cover w-full mt-8"
            src="./images/assets/static/slider/1/slider_image_1-right.png"
            alt="slider"
          />
        </div>
      </div>
    </section>
  );
};

export default SliderHome;
