import { useEffect, useState } from "react";
import Products from "../gallery/Product";

const dummyData = [
  {
    id: 1,
    name: "Kama Shawl",
    image: "./images/assets/static/arrivals/arrival-example.png",
    price: 12000,
    discount: 0.5,
    new: true,
  },
  {
    id: 2,
    name: "Kama Shawl",
    image: "./images/assets/static/arrivals/arrival-example.png",
    price: 12000,
    discount: 0.5,
    new: true,
  },
  {
    id: 3,
    name: "Kama Shawl",
    image: "./images/assets/static/arrivals/arrival-example.png",
    price: 12000,
    discount: 0.5,
    new: true,
  },
];

const NewArrivalsHome = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/v1/products/featured")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  if (products) console.log(products);

  return (
    <section className="bg-gray-100 py-20">
      <div className="flex items-center justify-center mb-20 ">
        <h1 className="font-f-unna text-6xl">New Arrivals</h1>
      </div>
      <div className="grid grid-cols-3 mx-auto items-center justify-between w-8/12 font-f-unna gap-x-5 text-white gap-y-5">
        {products.map((item) => (
          <Products item={item} key={item.id} />
        ))}
        {/*{dummyData.map((item) => (*/}
        {/*  <div*/}
        {/*    key={item.id}*/}
        {/*    className="card relative overflow-hidden flex items-center shadow-lg"*/}
        {/*  >*/}
        {/*    <img className="w-full" src={item.image} alt="example" />*/}
        {/*    <div className="card-label absolute flex justify-between top-0  w-full p-5">*/}
        {/*      <div className="rounded-full bg-teal-500 w-16 h-16 font-f-poppins font-semibold text-2xl items-center flex justify-center">*/}
        {/*        <span>{item.discount * 100}%</span>*/}
        {/*      </div>*/}
        {/*      <div>*/}
        {/*        {item.new && (*/}
        {/*          <button className="btn bg-black font-f-poppins px-5 py-2">*/}
        {/*            New*/}
        {/*          </button>*/}
        {/*        )}*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <div className="absolute bottom-0 flex flex-col gap-3 w-full bg-white rounded-t-lg text-black font-f-poppins">*/}
        {/*      <div className="p-4 flex flex-col gap-2">*/}
        {/*        <h1 className="text-2xl font-medium">{item.name}</h1>*/}
        {/*        <div className="flex gap-2 items-center">*/}
        {/*          <h1 className="text-lg  text-gray-500 line-through">*/}
        {/*            {item.price}*/}
        {/*          </h1>*/}
        {/*          <h1 className="text-3xl text-teal-500 font-medium">*/}
        {/*            IDR {item.price * item.discount}*/}
        {/*          </h1>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*))}*/}
      </div>
      <div className="flex justify-center mt-20">
        <button className="bg-black text-white font-f-poppins px-10 py-2 rounded-tr-lg rounded-bl-lg text-xl ">
          Go To Gallery
        </button>
      </div>
    </section>
  );
};

export default NewArrivalsHome;
