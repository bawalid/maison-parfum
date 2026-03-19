import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const { featured, category, search } = req.query;
    const filters = {};

    if (featured === "true") {
      filters.featured = true;
    }

    if (category) {
      filters.category = category;
    }

    if (search) {
      filters.$or = [
        { name: { $regex: search, $options: "i" } },
        { brand: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
      ];
    }

    const products = await Product.find(filters).sort({ featured: -1, createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Unable to fetch products." });
  }
};

export const getFeaturedProducts = async (req, res) => {
  try {
    const products = await Product.find({ featured: true }).limit(3);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Unable to fetch featured products." });
  }
};

export const getProductBySlug = async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });

    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }

    return res.json(product);
  } catch (error) {
    return res.status(500).json({ message: "Unable to fetch product." });
  }
};
