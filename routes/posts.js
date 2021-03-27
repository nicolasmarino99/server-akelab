import express, { Router } from "express";
import { getPosts, createPosts } from "../controllers/posts.js";

const router = Router()

router.get('/', getPosts)
router.post('/', createPosts)

export default router;