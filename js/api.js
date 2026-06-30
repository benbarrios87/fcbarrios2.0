// js/api.js
export const api = {
  async getTournament() {
    return {
      id: "euro-2028",
      name: "EM 2028",
      status: "planning"
    };
  },
  

  async getLeaderboard() {
    return [
      { id: "benjamin", name: "Benjamin", points: 42 },
      { id: "javier", name: "Javier", points: 39 },
      { id: "gaby", name: "Gaby", points: 34 }
    ];
  },
 async getHomePage() {
    const tournament = await this.getTournament();
    const leaderboard = await this.getLeaderboard();

    return {
      tournament,
      leaderboard
    };
  }
};
