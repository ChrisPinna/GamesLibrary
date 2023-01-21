import express from 'express'
import { getAllGames } from '../controllers/games';

const router = express.Router();

router.get('/',getAllGames);

export default router;