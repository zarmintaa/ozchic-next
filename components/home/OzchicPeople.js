import Image from "next/image";
const images = [
  {
    id: 1,
    url: "/images/assets/static/ozhic-people/Kama Shawl - Brunette.png",
    alt: "people-1",
  },
  {
    id: 2,
    url: "/images/assets/static/ozhic-people/Kama Shawl - Brunette.png",
    alt: "people-1",
  },
  {
    id: 3,
    url: "/images/assets/static/ozhic-people/Kama Shawl - Brunette.png",
    alt: "people-1",
  },
  {
    id: 4,
    url: "/images/assets/static/ozhic-people/Kama Shawl - Brunette.png",
    alt: "people-1",
  },
  {
    id: 5,
    url: "/images/assets/static/ozhic-people/Kama Shawl - Brunette.png",
    alt: "people-1",
  },
];
const OzchicPeople = () => {
  return (
    <div className="flex flex-col justify-center items-center p-5 lg:p-16">
      <h1 className="text-xl font-f-poppins font-semibold">#ozchicpeople</h1>
      <div className="flex mt-6 gap-2 flex-wrap justify-center">
        {images.map((image) => (
          <div key={image.id}>
            <Image src={image.url} width={250} height={250} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OzchicPeople;
