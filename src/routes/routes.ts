import { Router } from 'express';
import { IndexController } from '../controllers/index.controller';

const router = Router();
const indexController = new IndexController();

router.get('/index', () => {
  console.log('teste');
});

router.get('/', indexController.getIndex);

export default router;
