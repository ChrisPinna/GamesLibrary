import express from 'express'
import { createGame, deleteGame, getAllGames } from '../controllers/games';

const router = express.Router();

router.get('/',getAllGames);
router.post('/', createGame);
router.delete('/:id', deleteGame);

export default router;