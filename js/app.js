import { api } from "./api.js";
import { render } from "./render.js";
import { HomePage } from "./pages/home.js";

async function init() {
  const tournament = await api.getTournament();
  const leaderboard = await api.getLeaderboard();

  render(
    HomePage({
      tournament,
      leaderboard
    })
  );
}

init();
