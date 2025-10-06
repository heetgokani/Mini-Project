import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/userroutes.js";
import productRoutes from "./routes/productroutes.js";
import cors from "cors";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ DB connection error:", err));

const app = express();
app.use(cors());

app.use(express.json());
app.use("/user", userRoutes);
app.use("/products", productRoutes);
app.get("/", (req, res) => {
  res.send("Hellossssss World");
});

app.listen(process.env.PORT);
console.log(`Server is running on port ${process.env.PORT}`);
