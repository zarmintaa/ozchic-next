import featuredImage from "../../../../data/featured-image";

export default async function handler(req, res) {
  res
    .status(200)
    .json({ message: "Success get data", products: featuredImage });
}
