export interface BaseGame {
  name: string;
  bestGroupSize: number;
  gameTimeInSeconds: number;
  description: string;
  imageLink: string;
  BGGLink: string;
  cubicleInLibrary: string;
}


export interface Game extends BaseGame {
  id: number;
}
