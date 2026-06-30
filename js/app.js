import { api } from "./api.js";
import { render } from "./render.js";
import { LeaderboardList } from "./components/leaderboard.js";
import { Header } from "./components/layout/header.js";

async function init() {
  const tournament = await api.getTournament();
  const leaderboard = await api.getLeaderboard();

  render(` `
    <main>
      ${Header("FC Barrios", tournament.name)}
      ${LeaderboardList(leaderboard)}
    </main>
 `);
}

init();
