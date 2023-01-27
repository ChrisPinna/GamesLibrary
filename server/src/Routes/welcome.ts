import express from 'express'
import { createGame, deleteGame, getAllGames, updateGame } from '../controllers/games';
import { getWelcome } from '../controllers/welcome';

const router = express.Router();

router.get('/', getWelcome);

export default router;