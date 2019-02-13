import express from 'express';
var router = express.Router();
import { index } from '../controllers/indexController';

router.get('/', index);

export default router;