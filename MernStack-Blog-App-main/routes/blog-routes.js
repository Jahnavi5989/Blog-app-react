import express from 'express';
import { addBlog, deletBlog, getAllBlogs, getById, getByUserId, updateBlog } from '../controllers/blog-controller';


const blogrouter = express.Router();

blogrouter.get("/",getAllBlogs);
blogrouter.post("/add",addBlog);
blogrouter.put("/update/:id",updateBlog);
blogrouter.get("/:id",getById);
blogrouter.delete("/:id",deletBlog);
blogrouter.get("/user/:id",getByUserId);

export default blogrouter;