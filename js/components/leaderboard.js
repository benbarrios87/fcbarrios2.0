export function LeaderboardList(players) {
  return `
    <section>
      <h2>🏆 Leaderboard</h2>
      <ol>
        ${players.map(player => `
          <li>${player.name} – ${player.points} poeng</li>
        `).join("")}
      </ol>
    </section>
  `;
}
