import { api } from "./api.js";
import { LeaderboardList } from "./components/leaderboard.js";
import { Header } from "./components/layout/header.js";

async function init() {
  const tournament = await api.getTournament();
  const leaderboard = await api.getLeaderboard();

  document.querySelector("#app").innerHTML = `
    <main>
      ${Header("FC Barrios", tournament.name)}

      ${LeaderboardList(leaderboard)}
    </main>
  `;
}

init();
