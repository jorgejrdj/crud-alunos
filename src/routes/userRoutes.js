import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// não deveria existir
router.get('/', loginRequired, userController.index); // listar usuários
// router.get('/:id', userController.show); // listar usuários

// necessários
router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
