import { Router } from 'express';

import authMiddleware from './app/middlewares/authMiddleware';

import SignUpController from './app/controllers/SignUpController'
import SignInController from './app/controllers/SignInController'

import QuestionController from './app/controllers/QuestionControllers'

const routes = Router();

routes.post('/signup', SignUpController.store)
routes.post('/signin', SignInController.authenticate)

routes.get('/question', QuestionController.show)
routes.get('/question/:id', QuestionController.showDisciplina)
routes.post('/question', QuestionController.store)

routes.use(authMiddleware);

export default routes;