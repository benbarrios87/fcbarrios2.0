export function Button({ label, href = "#", variant = "primary" }) {
  return `
    <a class="btn btn-${variant}" href="${href}">
      ${label}
    </a>
  `;
}
