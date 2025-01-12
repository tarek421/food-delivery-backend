const express = require('express');
const cors = require('cors');
const app = express();
require("./config/db");

const userRouter = require('./routes/user.route');
const itemRouter = require('./routes/products.route');
const orderRouter = require('./routes/order.route');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.use('/users', userRouter);
app.use('/foods', itemRouter);
app.use('/orders', orderRouter);

module.exports = app;