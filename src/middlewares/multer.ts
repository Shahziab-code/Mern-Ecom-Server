// middlewares/multer.ts
import multer from 'multer';
import { storage } from '../config/cloudinary.js';  // Adjust path as needed

export const singleUpload = multer({ storage }).single('photo');
