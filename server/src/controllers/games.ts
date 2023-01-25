import db from "../db";
import { Request, Response } from "express";
import { BaseGame } from "../games/game";

export const getAllGames = async (req: Request, res: Response) => {
  const data = await db.query("SELECT * FROM games");

  try {
    res.status(201).json({ message: data.rows });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const createGame = async (req: Request, res: Response) => {
  const {
    name,
    bestGroupSize,
    gameTimeInSeconds,
    description,
    imageLink,
    BGGLink,
    cubicleInLibrary
  } = req.body as BaseGame;
  try {
    const data = await db.query(
      `INSERT INTO games (name, best_group_size, game_time_in_seconds, description, image_link, bgg_link, cubicle_in_library) VALUES ($1, $2, $3, $4, $5, $6, $7) returning *`,
      [name, bestGroupSize, gameTimeInSeconds, description, imageLink, BGGLink, cubicleInLibrary]
    );
    res
      .status(200)
      .json({ message: "Success, new game has been creaated!", data: data.rows });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
