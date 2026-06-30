export function Header(title, subtitle = "") {
  return `
    <header class="page-header">
      <h1>${title}</h1>
      ${subtitle ? `<p>${subtitle}</p>` : ""}
    </header>
  `;
}
