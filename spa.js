import { renderMatches, renderTeam } from './script.js';

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");

  function loadPage(page) {
    fetch(`partials/${page}.html`)
      .then(res => res.text())
      .then(html => {
        content.innerHTML = html;

        // Dynamic rendering based on page
        if (page === "matches") renderMatches();
        if (page === "team") renderTeam();
      })
      .catch(() => {
        content.innerHTML = "<p>Page not found.</p>";
      });
  }

  function handleNavigation(page) {
    loadPage(page);
    history.pushState({ page }, "", `#${page}`);
  }

  document.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      const page = e.target.getAttribute("href").replace("#", "");
      handleNavigation(page);
    }
  });

  window.addEventListener("popstate", () => {
    const page = location.hash.replace("#", "") || "home";
    loadPage(page);
  });

  // Initial Load
  const initialPage = location.hash.replace("#", "") || "home";
  loadPage(initialPage);
});
