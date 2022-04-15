const categoryData = [
  {
    id: 1,
    title: "SCARVES & SHAWLS",
    image: "./images/assets/static/shop-category/category_1.png",
  },
  {
    id: 2,
    title: "CLOTHES",
    image: "./images/assets/static/shop-category/category_2.png",
  },
  {
    id: 3,
    title: "PRINTED SCARVES",
    image: "./images/assets/static/shop-category/category_3.png",
  },
  {
    id: 4,
    title: "TOTEBAGS & POUCHES",
    image: "./images/assets/static/shop-category/category_4.png",
  },
];

const ShopByCategory = (props) => {
  return (
    <div className="bg-gray-200 min-h-screen py-20">
      <div className="flex items-center justify-center mb-20">
        <h1 className="font-f-unna text-6xl">Shop By Category</h1>
      </div>

      <div className="grid grid-cols-2 mx-auto items-center justify-between w-8/12 font-dm-sans font-semibold gap-5 text-black">
        {categoryData.map((category) => (
          <div
            key={category.id}
            className="relative overflow-hidden flex items-center h-80 bg-white shadow-sm hover:shadow-lg rounded-md"
          >
            <div className="w-1/2 h-full">
              <img
                className="w-full h-full object-cover "
                src={category.image}
                alt={category.title}
              />
            </div>
            <div className="w-1/2 h-full flex items-center justify-center">
              <h1 className="text-2xl w-36 mx-auto">{category.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;