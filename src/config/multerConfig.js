import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

multer({
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Só aceitamos PNG/JPEG'));
    }
    return cb(null, true);
  },
});
export default {
  storage: multer.diskStorage(
    {
      destination: (req, file, cb) => {
        cb(null, resolve(__dirname, '..', '..', 'uploads'));
      },
      filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
      },
    },
  ),
};
