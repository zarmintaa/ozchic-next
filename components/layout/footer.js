import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-2 w-10/12 mx-auto py-10 font-f-poppins gap-x-12">
        <div className="flex gap-x-5">
          <div className="w-1/2">
            <ul className="flex flex-col leading-loose">
              <li className="font-bold">ABOUT</li>
              <li>HOW TO SHOP</li>
              <li>CAREER</li>
              <li>TERM & CONDITION</li>
              <li>RETURN, EXCHANGE, & REFOUND</li>
            </ul>

            <div className="mt-5 flex flex-col gap-2">
              <span>SHIPPING</span>
              <div className="flex gap-5 items-center">
                <Image
                  src={"/" + "./images/assets/static/footer/jne.png"}
                  width={64}
                  height={26}
                  alt="jne"
                />

                <Image
                  src={"/" + "./images/assets/static/footer/jnt.png"}
                  width={120}
                  height={26}
                  alt="jnt"
                  srcSet=""
                />
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col gap-2">
              <span>PAYMENT BANK TRANSFER</span>
              <Image
                src={"/" + "./images/assets/static/footer/Group 193.png"}
                width={180}
                height={26}
                layout="fixed"
                alt="jne"
              />
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <span>ONLINE PAYMENT</span>
              <div>
                <Image
                  src={"/" + "./images/assets/static/footer/Group 194.png"}
                  width={180}
                  height={59}
                  layout="fixed"
                  alt="payment support"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 flex flex-col gap-2">
            <span className="font-semibold">CONTACT</span>
            <ul className="flex flex-col gap-2 leading-loose">
              <li className="flex gap-2 items-center">
                <i className="fa-brands fa-whatsapp"></i>082132000633
              </li>
              <li className="flex gap-2 items-center">
                <i className="fa-solid fa-envelope"></i>hiozchic@gmail.com
              </li>
              <li className="flex gap-2 items-center">
                <i className="fa-brands fa-facebook"></i>Ozchic Shop
              </li>
              <li className="flex gap-2 items-center">
                <i className="fa-brands fa-instagram"></i>Ozchic.co
              </li>
            </ul>
          </div>
          <div className="w-1/2">
            <img
              src="./images/assets/static/footer/Group 108.png"
              className="w-full object-cover"
              alt="ozchic"
            />
            <div className="flex items-center justify-center mt-5">
              <button className="bg-black text-white font-f-poppins w-full py-2 rounded-tr-md rounded-bl-md text-xl ">
                Go To Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;