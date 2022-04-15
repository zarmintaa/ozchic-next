import cors from "../../../../lib/cors";
import Product from "../../../../models/Product";

export default async function handler(req, res) {
  const { title } = req.query;

  await cors(req, res);

  if (title) {
    const searchProduct = Product.findOne(title);
    if (searchProduct.length < 1) {
      res.status(200).json({ message: "Data tidak ditemukan", data: null });
    }
    return res
      .status(200)
      .json({ message: "Success get data", data: searchProduct });
  }
  const data = Product.findAll();
  res.status(200).json(data);
}
