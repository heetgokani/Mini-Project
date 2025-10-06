import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    color: String,
    brand: String,
    image: String,
    locationlost: String,
    datelost: String,
    uniquemarks: String,
    name: String,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
