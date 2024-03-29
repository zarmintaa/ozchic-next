import { useRouter } from "next/router";
import { useState, useEffect, Fragment } from "react";

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  isFavProductExist,
  setFavProduct,
  unsetFavProduct,
} from "../../lib/cart-product";
import Loading from "../../components/UI/Loading";

import ProductDetail from "../../components/gallery/ProductDetail";
import Seo from "../../components/utils/Seo";

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
    <Fragment>
      <Seo
        description={product.description}
        url={`https://ozchic-next.vercel.app/gallery/${product.id}`}
        title={`Ozchic Store | ${product.name}`}
      />
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-5 mx-auto">
          {isLoading && <Loading />}
          {!isLoading && (
            <ProductDetail
              product={product}
              addFavProductHandler={addFavProductHandler}
              classFav={classFav}
            />
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
    </Fragment>
  );
};

export default DetailProduct;

export async function getStaticProps(context) {
  const { id } = context.params;
  const response = await fetch(
    "https://ozchic-store.vercel.app/api/v1/products"
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
  const response = await fetch(
    "https://ozchic-store.vercel.app/api/v1/products"
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
