export interface PlayerModel {
  id: number;
  name: string;
  score: number;
  turnOrder: number;
}

export const defaultPlayers = (): PlayerModel[] => {
  return [
    { id: 1, name: "Player 1", score: 0, turnOrder: 1 },
    { id: 2, name: "Player 2", score: 0, turnOrder: 2 },
    { id: 3, name: "Player 3", score: 0, turnOrder: 3 },
    { id: 4, name: "Player 4", score: 0, turnOrder: 4 },
    { id: 5, name: "Player 5", score: 0, turnOrder: 5 },
  ];
};
