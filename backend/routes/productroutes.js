import express from "express";
import {
  insertProduct,
  getAllProducts,
  getProductById,
} from "../controller/productcontroller.js";

const router = express.Router();

router.post("/insert", insertProduct);
router.get("/all", getAllProducts);
router.get("/:id", getProductById);

export default router;
