import express from "express";

import { aggregateUserData }
from "../controllers/aggregatorController.js";

const router = express.Router();

router.get("/aggregate/:id", aggregateUserData);

export default router;