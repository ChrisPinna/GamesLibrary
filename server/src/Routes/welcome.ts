import express from 'express'
import { createGame, deleteGame, getAllGames, updateGame } from '../controllers/games';

const router = express.Router();

router.get('/', getWelcome);

export default router;