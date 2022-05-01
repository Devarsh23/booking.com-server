// const express = require('express');
import * as tuitDao from "./controller/tuits/tuits-dao.js"
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dealsController from "./controller/deals-controller.js";
import tuitsController from "./controller/tuits-controller.js";
import airlinesController from "./controller/airlines-controller.js";
import initialController from "./controller/initial-controller.js";
import bookingsController from "./controller/bookings-controller.js";
import discountController from "./controller/discount-controller.js";
//const DB_CONNECTION_STRING = "mongodb+srv://devarsh23:hello123@cluster0.pxmhw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/webdev'

// mongodb+srv://devarsh23:<password>@cluster0.pxmhw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// mongoose.connect(CONNECTION_STRING);
//mongoose.connect("mongodb+srv://devarsh23:hello123@cluster0.pxmhw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
mongoose.connect('mongodb://0.0.0.0:27017/project');
const app = express();
app.use(cors());
// app.get('/hello', (req, res) => {res.send('Life is Good!')})
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.use(express.json());
tuitsController(app);
dealsController(app);
airlinesController(app);
initialController(app);
bookingsController(app);
discountController(app);
app.listen(process.env.PORT || 4000);

