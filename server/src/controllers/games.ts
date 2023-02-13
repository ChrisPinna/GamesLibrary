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
    players,
    playtime,
    description,
    imageLink,
    BGGLink,
    cubicleInLibrary,
  } = req.body as BaseGame;
  try {
    const data = await db.query(
      `INSERT INTO games (name, players, playtime, description, image_link, bgg_link, cubicle_in_library) VALUES ($1, $2, $3, $4, $5, $6, $7) returning *`,
      [
        name,
        players,
        playtime,
        description,
        imageLink,
        BGGLink,
        cubicleInLibrary,
      ]
    );
    res.status(200).json({
      message: "Success, new game has been creaated!",
      data: data.rows,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
    console.log(error.message)
  }
};

export const deleteGame = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    await db.query(`DELETE FROM games WHERE id = $1`, [id]);
    res.status(200).json({ message: "Success, the game was deleted" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateGame = async (req: Request, res: Response) => {
  const { id } = req.params;

  const {
    name,
    players,
    playtime,
    description,
    imageLink,
    BGGLink,
    cubicleInLibrary,
  } = req.body;

  try {
    const data = await db.query(
      `Update games SET name = $1, players = $2, playtime = $3, description = $4, image_link = $5, bgg_link = $6, cubicle_in_library = $7 WHERE id = $8 RETURNING *`,
      [
        name,
        players,
        playtime,
        description,
        imageLink,
        BGGLink,
        cubicleInLibrary,
        id
      ]
    );
    res.status(200).json({ message: "Game successfuly updated", data: data.rows });
  } catch (error: any) {
    res.status(500).json({ message: error });
  }
};
