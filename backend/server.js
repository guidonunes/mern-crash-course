// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';


dotenv.config();

const app = express();

app.use(express.json()); // allow to accept json data in the body

app.post('/api/products', async (req, res) => {
  const product = req.body;

  if(!product.name||!product.price||!product.image){
    return res.status(400).json({message: 'Please fill all fields'});
  }

  const newProduct = await Product.create(product);

  try {
    await newProduct.save();
    res.status(201).json({success: true, data: newProduct});
  } catch (error) {
    console.log("Error in create product", error.message);
    res.status(500).json({success: false, message: 'Server Error'});
  }
});

app.listen(5000, () => {
  connectDB();
  console.log('Server started on http://localhost:5000 ');
})

//
