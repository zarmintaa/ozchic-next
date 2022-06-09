import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  isFavProductExist,
  setFavProduct,
  unsetFavProduct,
} from "../../lib/cart-product";
import Loading from "../../components/UI/Loading";

const DetailProduct = ({ dataProduct }) => {
  const router = useRouter();
  const id = router.query.id;
  const [product, setProduct] = useState(dataProduct);
  const [isFavProduct, setIsFavProduct] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [classFav, setClassFav] = useState("text-gray-500");

  const addFavProductHandler = () => {
    if (isFavProduct) {
      unsetFavProduct(+id);
      toast.error("Menghapus produk dari keranjang!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setClassFav("text-gray-500");
      setProduct(dataProduct);
      setIsFavProduct(false);
    } else {
      setFavProduct(product);
      setProduct(dataProduct);
      toast.success("Menambah produk ke keranjang.", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setClassFav("text-red-500");
      setIsFavProduct(true);
    }
  };

  useEffect(() => {
    if (product) {
      setIsLoading(false);
    }
  }, [product]);

  useEffect(() => {
    if (product) {
      const isFav = isFavProductExist(+product.id);
      console.log(isFav);
      if (isFav !== -1) {
        setClassFav("text-red-500");
        setIsFavProduct(true);
      } else {
        setClassFav("text-gray-500");
        setIsFavProduct(false);
      }
    }
  }, [product, product.id, isFavProduct]);

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-5 mx-auto">
        {isLoading && <Loading />}
        {!isLoading && (
          <div className="lg:w-4/5 mx-auto grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
            <Image
              alt={product.name}
              className=" w-full object-cover object-center rounded border border-gray-200"
              src={"/" + product.image}
              width={400}
              height={600}
              layout="intrinsic"
            />
            <div className=" w-full lg:pl-10 lg:py-6 mt-6 mx-auto lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                OZCHIC COLLECTION
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 mt-1">
                {product.name}
              </h1>
              <div className="flex mb-4 pt-2">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-yellow-300"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-yellow-300"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    className="w-4 h-4 text-yellow-300"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-yellow-300"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-4 h-4 text-yellow-300"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </span>
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="leading-relaxed text-gray-600">
                  Kondisi :{" "}
                  <span className="text-gray-900 font-medium">
                    {product.condition}
                  </span>
                </p>
                <p className="leading-relaxed text-gray-600">
                  Berat :{" "}
                  <span className="text-gray-900 font-medium">
                    {product.weight}
                  </span>
                </p>
                <p className="leading-relaxed text-gray-600">
                  Ukuran :{" "}
                  <span className="text-gray-900 font-medium">
                    {product.size}
                  </span>
                </p>
                <p className="leading-relaxed text-gray-600">
                  Finishing :{" "}
                  <span className="text-gray-900 font-medium">
                    {product.finishing}
                  </span>
                </p>
                <p className="leading-relaxed text-gray-600">
                  Kategori :{" "}
                  <span
                    className="text-gray-900 font-bold capitalize
              "
                  >
                    {product.category}
                  </span>
                </p>
                <p className="leading-relaxed">{product.description}</p>
              </div>

              <hr className="bg-gray-200 mb-5 mt-6" />
              <div className="flex justify-center items-center flex-wrap gap-0 sm:gap-5">
                <span className="title-font font-medium text-3xl text-gray-900">
                  Rp.{product.price}
                </span>
                <button
                  onClick={() => router.push("/cart")}
                  className="flex ml-auto text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded"
                >
                  Order Now
                </button>
                <button
                  onClick={addFavProductHandler}
                  className={`rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center ml-4 ${classFav}`}
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default DetailProduct;

export async function getStaticProps(context) {
  const { id } = context.params;
  const response = await fetch(
    "https://ozchic-next.vercel.app/api/v1/products"
  );
  const data = await response.json();
  const dataProduct = data.products.find((product) => product.id === +id);

  console.log(dataProduct);
  return {
    props: {
      dataProduct,
    },
  };
}

export async function getStaticPaths(context) {
  // const response = await fetch("http://localhost:3000/api/v1/products");
  const response = await fetch(
    "https://ozchic-next.vercel.app/api/v1/products"
  );
  const data = await response.json();
  const paths = data.products.map((product) => ({
    params: {
      id: product.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
