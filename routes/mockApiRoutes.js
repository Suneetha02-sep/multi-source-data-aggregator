import express from "express";

import {
    getUser,
    getUserPosts,
    getRecommendations
} from "../controllers/mockApiController.js";

const router = express.Router();

router.get("/users/:id", getUser);

router.get("/users/:id/posts", getUserPosts);

router.get("/recommendations", getRecommendations);

export default router;