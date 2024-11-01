import express from 'express';
import Connection from './database/db.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import DefaultData from './default.js';
import Router from './routes/route.js';
import path from "path";

const app= express();

const _dirname=path.resolve();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));  
app.use('/', Router);

const PORT=process.env.PORT || 8000;

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=encodeURIComponent( process.env.DB_PASSWORD);

Connection(USERNAME, PASSWORD);

app.listen(PORT, ()=>console.log(`server is running successfully on PORT ${PORT}`));

DefaultData();
