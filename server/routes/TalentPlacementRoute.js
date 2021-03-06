import { Router } from "express";
import IndexController from "../controller/IndexController";

const router = Router();

// get
router.get("/", IndexController.TalentPlacement.findAllRows);
// post
router.post("/", IndexController.TalentPlacement.statusPlace,
    IndexController.TalentPlacement.talenPlacement,
    IndexController.TalentPlacement.UpdateStatusPlace
);
router.post("/status", IndexController.TalentPlacement.createSwitchIdle,
    IndexController.TalentPlacement.UpdateStatus,
)

export default router;