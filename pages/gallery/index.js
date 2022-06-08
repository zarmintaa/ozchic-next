import { useCallback, useEffect, useState } from "react";
import Products from "../../components/gallery/Product";
import Loading from "../../components/UI/Loading";
import CategoryHelper from "./../../lib/ProductHelper";
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
        <aside className="relative w-64 font-f-poppins" aria-label="Sidebar">
          <div className="flex items-center px-2 py-2 justify-center bg-teal-500 text-white gap-2 rounded-md m-2">
            <button
              onClick={() => setSidebarToggle(!sidebarToggle)}
              type="button"
            >
              <span>Minimize Sidebar</span>
            </button>
          </div>
          <div className="overflow-y-auto py-4 px-3">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setCategoryProduct("")}
                  type="button"
                  className="flex items-center p-2 w-full text-base group font-normal text-gray-900 rounded-lg  hover:bg-gray-100"
                >
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-3">Gallery</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setToggle(!toggle)}
                  type="button"
                  className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
                  aria-controls="dropdown-example"
                >
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    Category
                  </span>
                  {toggle && (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                  {!toggle && (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  )}
                </button>
                <ul
                  id="dropdown-example"
                  className={
                    toggle ? "hidden py-2 space-y-2" : "py-2 space-y-2"
                  }
                >
                  <li>
                    <button
                      onClick={() => setCategoryProduct("hijab")}
                      type="button"
                      className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
                    >
                      Hijab
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setCategoryProduct("pashmina")}
                      type="button"
                      className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
                    >
                      Pashmina
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setCategoryProduct("scarf")}
                      type="button"
                      className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
                    >
                      Scarf
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setCategoryProduct("totebag")}
                      type="button"
                      className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100"
                    >
                      Totebag
                    </button>
                  </li>
                </ul>
              </li>
              <li>
                <form>
                  <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg">
                    <label htmlFor="table-search" className="sr-only">
                      Search
                    </label>
                    <div className="relative mt-1 w-full">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="table-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block pl-10 p-2.5 w-full "
                        placeholder="Search"
                        onChange={searchChangeHandler}
                      />
                    </div>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </aside>
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
  // const res = await fetch("http://localhost:3000/api/v1/products");
  const res = await fetch("https://ozchic-next.vercel.app/api/v1/products");
  const data = await res.json();

  return {
    props: {
      dataProducts: data.products,
    }, // will be passed to the page component as props
  };
}
