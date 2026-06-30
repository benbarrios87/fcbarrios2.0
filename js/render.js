export function render(html) {
  const app = document.querySelector("#app");

  if (!app) {
    console.error("Fant ikke #app-elementet.");
    return;
  }

  app.innerHTML = html;
}
