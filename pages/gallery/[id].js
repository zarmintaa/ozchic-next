import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
const DetailProduct = () => {
  const router = useRouter();
  const id = router.query.id;
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getProduct = useCallback(async () => {
    const response = await fetch(`/api/v1/products/${id}`);
    const result = await response.json();
    setProduct(result.product);
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-5 mx-auto">
        <div className="lg:w-4/5 mx-auto grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
          <Image
            alt={product.name}
            className=" w-full object-cover object-center rounded border border-gray-200"
            src={"/" + product.images}
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
                  {product.kondisi}
                </span>
              </p>
              <p className="leading-relaxed text-gray-600">
                Berat :{" "}
                <span className="text-gray-900 font-medium">
                  {product.berat}
                </span>
              </p>
              <p className="leading-relaxed text-gray-600">
                Ukuran :{" "}
                <span className="text-gray-900 font-medium">
                  {product.ukuran}
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
                  {product.kategori}
                </span>
              </p>
              <p className="leading-relaxed">{product.deskripsi}</p>
            </div>

            <hr className="bg-gray-200 mb-5 mt-6" />
            <div className="flex justify-center items-center">
              <span className="title-font font-medium text-3xl text-gray-900">
                Rp.{product.price}
              </span>
              <button className="flex ml-auto text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded">
                Order Now
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
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
      </div>
    </section>
  );
};

export default DetailProduct;
