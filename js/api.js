
import { ACTIVE_TOURNAMENT_ID } from "./config.js";

const mockLeaderboard = [
  { id: "benjamin", name: "Benjamin Barrios", points: 42, rank: 1 },
  { id: "javier", name: "Javier", points: 39, rank: 2 },
  { id: "gaby", name: "Gaby", points: 34, rank: 3 }
];

export const api = {
  async getTournament() {
    return {
      id: ACTIVE_TOURNAMENT_ID,
      name: "EM 2028",
      status: "planning"
    };
  },

  async getLeaderboard() {
    return mockLeaderboard;
  }
};
