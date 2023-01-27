import express from 'express'
import { createGame, deleteGame, getAllGames, updateGame } from '../controllers/games';

const router = express.Router();

router.get('/',getAllGames);
router.post('/', createGame);
router.delete('/:id', deleteGame);
router.put('/:id', updateGame);

export default router;