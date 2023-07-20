//? EXPRESS
import { Router, json } from "express";
const postRouter = Router();

//? CONTROLLERS
import createAccount from '../controllers/createAccount.js';
import userLogin from "../controllers/userLogin.js";

//? MIDDLEWARE
import checkAuth from '../middleware/check-auth.js';

postRouter.use(json());

//* POST methods available to anyone
postRouter.post("/", createAccount);
postRouter.post("/login", userLogin)

//* Any routes after this one are protected and must have a valid JWT
postRouter.use(checkAuth);

export default postRouter;