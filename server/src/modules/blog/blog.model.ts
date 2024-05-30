import { Schema, model } from "mongoose";
import { TBlog } from "./blog.type";

const blogSchema = new Schema<TBlog>({
  id: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  writer: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
});

export const blogModel = model<TBlog>("Blog", blogSchema);