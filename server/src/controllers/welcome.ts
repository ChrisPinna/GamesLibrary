import { Request, Response } from "express";

export const getWelcome = async (req: Request, res: Response) => {
  try {
    res.status(200).send("Welcom to the Games Library!")
  } catch (error: any) {
    res.status(500).json({message: error})
  }
};