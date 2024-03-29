import express from "express";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';


// components
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Routes from './routes/Routes.js';

dotenv.config()


const app = express();

app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
app.use('/', Routes);


const port = 8000;


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(port, ()=> console.log(`Server is running on port ${port}`));

DefaultData();