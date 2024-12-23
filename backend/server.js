// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import mongoose from 'mongoose';
import Product from './models/product.model.js';


dotenv.config();

const app = express();

app.use(express.json());



app.listen(5000, () => {
  connectDB();
  console.log('Server started on http://localhost:5000 ');
})

//
