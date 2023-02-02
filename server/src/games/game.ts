export interface BaseGame {
  name: string;
  bestGroupSize: number;
  gameTimeInMin: number;
  description: string;
  imageLink: string;
  BGGLink: string;
  cubicleInLibrary: string;
}


export interface Game extends BaseGame {
  id: number;
}
