import { Header } from "../components/layout/header.js";
import { Button } from "../components/ui/button.js";
import { LeaderboardList } from "../components/leaderboard.js";

export function HomePage({ tournament, leaderboard }) {
  return `
    <main>
      ${Header("FC Barrios", tournament.name)}

      ${Button({
        label: "Gå til tips",
        href: "./pages/tips.html"
      })}

      ${LeaderboardList(leaderboard)}
    </main>
  `;
}
