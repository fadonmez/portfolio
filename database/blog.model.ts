import { Schema, models, model, Document } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  description: string;
}

const BlogSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Blog = models.Blog || model('Blog', BlogSchema);

export default Blog;
