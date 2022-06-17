import { Router } from 'express';
import { MusicController } from '../controllers/music.controller';
import { PlaylistController } from '../controllers/playlist.controller';
import { AuthenticationJWT } from '../middlewares/authentication-jwt';
import { AuthenticationController } from '../tools/authentication/controller/authetication.controller';
import { emailValidator } from '../middlewares/email.validator';
import { Request, Response } from 'express';
import { UserController } from '../controllers/user.controller';

const router = Router();
const playlistController = new PlaylistController();
const musicController = new MusicController();
const userController = new UserController();
const authenticationContoller = new AuthenticationController();

const authentication = new AuthenticationJWT().authethentication;

/**
 * Authentication
 */
router.post(`/api/${authenticationContoller.url}/register`, emailValidator, authenticationContoller.registerLogin);
router.post(`/api/${authenticationContoller.url}`, emailValidator, authenticationContoller.authentication);

/**
 * Playlist Routes
 */
router.get(`/api/playlist`, authentication, playlistController.findAll);
router.get(`/api/playlist/:id`, authentication, playlistController.findById);
router.post(`/api/playlist`, authentication, playlistController.insert);
router.put(`/api/playlist/:id`, authentication, playlistController.update);
router.delete(`/api/playlist/:id`, authentication, playlistController.delete);

/**
 * Music Routes
 */
router.get(`/api/music`, authentication, musicController.findAll);
router.get(`/api/music/:id`, authentication, musicController.findById);
router.post(`/api/music`, authentication, musicController.insert);
router.put(`/api/music/:id`, authentication, musicController.update);
router.delete(`/api/music/:id`, authentication, musicController.delete);

/**
 * User Routes
 */
router.get(`/api/user`, authentication, userController.findAll);
router.get(`/api/user/:id`, authentication, userController.findById);
router.post(`/api/user`, authentication, userController.insert);
router.put(`/api/user/:id`, authentication, userController.update);
router.delete(`/api/user/:id`, authentication, userController.delete);

/**
 * Redirect para o swagger
 */
router.get(`/`, (req: Request, res: Response) => {
  res.redirect('/api-docs');
});

export default router;
