import express, { Request, Response } from 'express';
import multer from 'multer';
import { storage } from '../config/cloudinary.js';

const router = express.Router();
const upload = multer({ storage });

router.post('/', upload.single('image'), (req: Request, res: Response): void => {
  if (!req.file) {
    res.status(400).json({ success: false, message: 'No file uploaded.' });
    return;
  }

  const file = req.file as Express.Multer.File & { path: string };

  res.status(200).json({
    success: true,
    imageUrl: file.path,
  });
});


export default router;