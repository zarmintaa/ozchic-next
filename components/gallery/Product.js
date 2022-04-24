import Link from "next/link";
import Image from "next/image";

const Products = (props) => {
  const { item } = props;
  return (
    <Link href={`/gallery/${item.id}`} passHref>
      <div className="relative overflow-hidden flex items-center shadow-sm hover:shadow-lg rounded-md">
        <Image
          className="object-cover hover:scale-125 hover:transition hover:duration-500"
          src={"/" + item.images}
          alt={item.name}
          width={360}
          height={400}
          layout="fixed"
        />
        <div className="card-label absolute flex justify-between top-0 w-full">
          <span className="leading-none text-sm text-center pt-1.5 pb-1.5 px-2.5 capitalize font-normal font-f-poppins bg-teal-600 text-white">
            {item.kategori}
          </span>
          {item.discount && (
            <div className="rounded-full bg-teal-500 w-16 h-16 font-f-poppins font-semibold text-2xl items-center flex text-white justify-center">
              <span>{item.discount * 100}%</span>
            </div>
          )}
          <div>
            {item.new && (
              <button className="btn bg-black text-white font-f-poppins px-5 py-2 rounded-md">
                New
              </button>
            )}
          </div>
        </div>
        <div className="absolute bottom-0 flex flex-col gap-3 w-full bg-white text-black font-f-poppins">
          <div className="px-4 py-2 flex flex-col gap-1">
            <h2 className="text-lg line-clamp-2">{item.name}</h2>
            <div className="flex gap-2 items-center">
              <h1 className="text-lg font-semibold ">Rp. {item.price}</h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Products;
