import express, { Router } from "express";
import { getMovies } from "../controllers/movies.js";

const router = Router()

router.post('/', getMovies)

export default router;