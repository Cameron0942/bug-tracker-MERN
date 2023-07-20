import dotenv from 'dotenv';
dotenv.config();

import express, { json } from 'express';
const app = express();
import cors from "cors";
// import path from 'path';
// import { MongoClient } from "mongodb";
import mongoose from 'mongoose';
const { connect, connection } = mongoose;


//? PORTS
const mongodbPort = 7000;
const appPort = 5000;

//? ROUTERS
import postRouter from './routes/postRouter.js';

app.use(json());
app.use(cors());

// app.use(express.static(path.join(__dirname, 'build')));

// eslint-disable-next-line no-undef
const mongodbURI = process.env.MONGODB_URI;
connect(mongodbURI);

connection.once("open", () => {
    console.log(`Connected to MongoDB on port: ${mongodbPort}`);
  });

//* ROUTES
app.use("/", postRouter);

app.listen(appPort, () => console.log(`Server is running on port ${appPort}`));