import express from "express";
import { createShortLink, redirectToOriginalUrl } from "../controllers/linkController.js";

const router= express.Router();

router.post("/api/links", createShortLink);
router.get("/:slug", redirectToOriginalUrl);

export default router;