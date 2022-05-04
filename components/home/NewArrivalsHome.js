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
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto items-center justify-between w-full lg:w-8/12 font-f-unna gap-x-5 text-white gap-y-5">
        {products.map((item) => (
          <Products item={item} key={item.id} />
        ))}
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
