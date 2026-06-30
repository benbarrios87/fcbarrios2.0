import { api } from "./api.js";
import { render } from "./render.js";
import { HomePage } from "./pages/home.js";

async function init() {
  const homeData = await api.getHomePage();

  render(
    HomePage(homeData)
  );
}

init();
