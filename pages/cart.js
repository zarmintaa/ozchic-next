import {
  getProductFromLocalStorage,
  setProductToLocalStorage,
  updateCountProduct,
} from "../lib/cart-product";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

const Cart = () => {
  const [product, setProduct] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [price, setTotalPrice] = useState(0);
  const [orderToggle, setOrderToggle] = useState(false);
  const [nameOrder, setNameOrder] = useState("");

  // input form
  const nameInput = useRef();
  const addressInput = useRef();
  const phoneInput = useRef();
  const router = useRouter();

  const updateHandler = useCallback(() => {
    const cartProduct = getProductFromLocalStorage();
    let totalItem = 0;
    let totalPrice = 0;
    let nameOrderTitle = "";
    cartProduct.map((product) => {
      totalItem += product.count;
      totalPrice += product.count * +product.price;
      nameOrderTitle += `[${product.name}] `;
    });
    setTotalItems(totalItem);
    setTotalPrice(totalPrice);
    setProduct(cartProduct);
    setNameOrder(nameOrderTitle);
  }, []);

  useEffect(() => {
    updateHandler();
  }, [updateHandler]);

  const updateProduct = (id, action) => {
    if (action === "ADD") {
      updateCountProduct(id, "ADD");
      updateHandler();
    } else {
      updateCountProduct(id, "DELETE");
      updateHandler();
    }
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    const name = nameOrder;
    const orderBy = nameInput.current.value;
    const address = addressInput.current.value;
    const phone = phoneInput.current.value;
    const count = totalItems;
    const data = { name, orderBy, price, address, phone, count };

    fetch("http://localhost:8000/api/orders/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === "success") {
          setProductToLocalStorage([]);
          updateHandler();
          alert("Success");
        } else {
          alert("Failed");
        }
        router.push("/gallery");
      });
  };

  const lengthProduct = totalItems.length > 0;

  return (
    <section className="w-full lg:w-9/12 mx-auto grid lg:grid-cols-[2fr,_1fr] gap-5  my-10">
      {/* List items */}

      <div className="grid gap-5 h-fit">
        {product.map((product) => (
          <div
            key={product.id}
            className="flex gap-x-5 justify-center shadow-md rounded-lg overflow-hidden "
          >
            <div className="w-32 h-32">
              <Image
                src={"/" + product.image}
                className="object-cover w-full h-full"
                width={500}
                height={700}
                layout={"responsive"}
                alt={product.name}
              />
            </div>
            <div className="w-full flex flex-col gap-y-1 py-2.5 ">
              <h1
                onClick={() => router.push(`/gallery/${product.id}`)}
                className="text-gray-900 text-2xl title-font font-medium cursor-pointer"
              >
                {product.name}
              </h1>
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
              <span className="title-font font-medium text-2xl text-gray-900">
                Rp.{product.price}
              </span>
              <div className="flex items-center justify-between">
                <span>Jumlah : {product.count} pcs</span>
                <div className="px-5 flex gap-2.5">
                  <button
                    onClick={() => updateProduct(product.id, "DELETE")}
                    type="button"
                    className="px-3 py-2 text-normal font-medium text-center text-white bg-red-600 rounded hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 "
                  >
                    Kurangi
                  </button>
                  <button
                    onClick={() => updateProduct(product.id, "ADD")}
                    type="button"
                    className="px-3 py-2 text-normal font-medium text-center text-white bg-blue-700 rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                  >
                    Tambah
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="shadow-lg p-5 h-fit">
        <div className="border-b-2 text-center text-xl font-semibold border-gray-600 pb-2">
          <h1 className="font-semibold text-2xl">Detail</h1>
        </div>
        <div className="mt-5">
          <div className="text-xl">Total item : {totalItems}</div>
          <div className="text-xl">
            Total harga:{" "}
            <span className="font-medium text-2xl">Rp.{price}</span>
          </div>
        </div>
        <div className="mt-5">
          <button
            onClick={() => setOrderToggle(!orderToggle)}
            className="w-full py-2 text-white text-lg bg-teal-600 hover:bg-teal-700 rounded"
          >
            Order
          </button>
        </div>
      </div>

      {orderToggle && (
        <div className="shadow-lg py-2.5 px-2.5 mt-10">
          <div className="text-center">
            <h1 className="text-3xl font-semibold">Form Pemesanan</h1>
          </div>
          <form id="form" onSubmit={submitFormHandler}>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                ref={nameInput}
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Nama Pemesan
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                ref={addressInput}
                required
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Alamat
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="tel"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                ref={phoneInput}
                required
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number
              </label>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default Cart;
