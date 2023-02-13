export interface BaseGame {
  name: string;
  players: string;
  playtime: string;
  description: string;
  imageLink: string;
  BGGLink: string;
  cubicleInLibrary: string;
}


export interface Game extends BaseGame {
  id: number;
}
