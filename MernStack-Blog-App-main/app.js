import express from 'express';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import mongoose from "mongoose";
import blogrouter from './routes/blog-routes';
import router from './routes/user-routes';
import cors from 'cors'
require("dotenv").config();




const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog", blogrouter);


mongoose.connect("mongodb+srv://root:root@cluster0.zmxklan.mongodb.net/kludairyretryWrites=true&w=majority").then(()=>app.listen(process.env.PORT || 5000)).then(()=>console.log("connected")).catch((err)=>console.log(err));


//root