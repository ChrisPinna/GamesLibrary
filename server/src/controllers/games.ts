import { dummyGamesData } from "../fakeData";

export const getAllGames = async (req: any, res: any) => {
  const data = dummyGamesData;

  try {
    res.status(201).json({ message: data });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
