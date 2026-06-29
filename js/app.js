// js/app.js
import { api } from "./api.js";

async function init() {
  const tournament = await api.getTournament();
  const leaderboard = await api.getLeaderboard();

  document.querySelector("#app").innerHTML = `
    <main>
      <h1>FC Barrios</h1>
      <p>${tournament.name}</p>

      <section>
        <h2>🏆 Leaderboard</h2>
        <ol>
          ${leaderboard.map(player => `
            <li>${player.name} – ${player.points} poeng</li>
          `).join("")}
        </ol>
      </section>
    </main>
  `;
}

init();
