import { useCallback, useEffect, useState } from "react";
import Products from "../../components/gallery/Product";
import Loading from "../../components/UI/Loading";
import CategoryHelper from "./../../lib/ProductHelper";
import SidebarMenu from "../../components/gallery/SidebarMenu";
const Gallery = ({ dataProducts }) => {
  const [products, setProducts] = useState(dataProducts);
  const [isLoading, setIsLoading] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [categoryProduct, setCategoryProduct] = useState("");

  const fetchProductHandler = useCallback(
    (category) => {
      setProducts(CategoryHelper.getProductByCategory(dataProducts, category));
      setIsLoading(false);
    },
    [dataProducts]
  );

  const searchChangeHandler = (e) => {
    e.preventDefault();
    const search = e.target.value;
    if (search === "") {
      setProducts(dataProducts);
    }

    setProducts(CategoryHelper.searchProductByTitle(dataProducts, search));
  };

  useEffect(() => {
    if (isLoading) {
      setProducts([]);
    }
  }, [isLoading]);

  useEffect(() => {
    fetchProductHandler(categoryProduct);
  }, [fetchProductHandler, categoryProduct]);

  return (
    <div className="flex">
      {!sidebarToggle && (
        <div className="relative">
          <div className="flex absolute w-32 gap-2 items-center px-2 py-2 justify-center bg-teal-500 text-white rounded-md mt-2 ml-5">
            <button
              onClick={() => setSidebarToggle(!sidebarToggle)}
              type="button"
            >
              Open Sidebar
            </button>
          </div>
        </div>
      )}
      {sidebarToggle && (
        <SidebarMenu
          searchChangeHandler={searchChangeHandler}
          setSidebarToggle={setSidebarToggle}
          setToggle={setToggle}
          sidebarToggle={sidebarToggle}
          toggle={toggle}
          setCategoryProduct={setCategoryProduct}
        />
      )}
      <div className="bg-gray-100 w-full">
        {isLoading && <Loading />}

        <div
          className={`grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-5 gap-5 min-h-full overflow-auto justify-center items-center ${
            !sidebarToggle ? "mt-8" : ""
          }`}
        >
          {products?.map((item) => (
            <Products item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

export async function getStaticProps(context) {
  const res = await fetch("https://ozchic-next.vercel.app/api/v1/products");
  const data = await res.json();

  return {
    props: {
      dataProducts: data.products,
    },
  };
}
