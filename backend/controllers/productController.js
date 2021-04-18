import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

//@desc    fetch all products
//@route   GET /api/products
//@access  public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//@desc    fetch single product
//@route   GET /api/products:id
//@access  public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

//@desc    delete a product
//@route   DELETE /api/products/:id
//@access  public/admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product removed from inventory" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

//@desc    create a product
//@route   POST /api/products
//@access  public/admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Book name",
    price: 0,
    user: req.user._id,
    image: "/images/1984.jpg",
    author: "book author",
    category: "book category",
    countInStock: 0,
    numReviews: 0,
    description: "book description",
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

//@desc    update a product
//@route   POST /api/products
//@access  public/admin
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    image,
    author,
    category,
    countInStock,
    numReviews,
    description,
  } = req.body;
  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.author = author;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.status(201).json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
};
