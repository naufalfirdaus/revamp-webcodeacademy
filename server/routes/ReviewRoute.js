import { Router } from "express";
import IndexController from "../controller/IndexController";

const router = Router();

// get

router.get("/",IndexController.ReviewController.findTesti);



export default router;