//? EXPRESS
import { Router, json } from "express";
const postRouter = Router();

//? CONTROLLERS
import createAccount from '../controllers/createAccount.js';

//? MIDDLEWARE
import checkAuth from '../middleware/check-auth.js';

postRouter.use(json());

//* POST methods available to anyone
postRouter.post("/", createAccount);

//* Any routes after this one are protected and must have a valid JWT
postRouter.use(checkAuth);

export default postRouter;