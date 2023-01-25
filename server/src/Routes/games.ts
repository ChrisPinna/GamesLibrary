import express from 'express'
import { createGame, getAllGames } from '../controllers/games';

const router = express.Router();

router.get('/',getAllGames);
router.post('/', createGame);

export default router;