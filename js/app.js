import { api } from "./api.js";
import { LeaderboardList } from "./components/leaderboard.js";

async function init() {
  const tournament = await api.getTournament();
  const leaderboard = await api.getLeaderboard();

  document.querySelector("#app").innerHTML = `
    <main>
      <h1>FC Barrios</h1>
      <p>${tournament.name}</p>

      ${LeaderboardList(leaderboard)}
    </main>
  `;
}

init();
