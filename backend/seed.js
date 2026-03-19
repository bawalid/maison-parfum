import dotenv from "dotenv";
import connectDB from "./config/db.js";
import products from "./data/products.js";
import Product from "./models/Product.js";

dotenv.config();

const seedData = async () => {
  try {
    await connectDB();
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("Sample products seeded successfully.");
    process.exit(0);
  } catch (error) {
    console.error(`Seeding failed: ${error.message}`);
    process.exit(1);
  }
};

seedData();
