// const express = require('express');
import express from 'express';

const app = express();

app.get('/products', (req, res) => {
  res.send('API is running...');
})

app.listen(5000, () => {
  console.log('Server started on http://localhost:5000 ');
})

//
