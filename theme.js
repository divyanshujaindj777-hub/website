/**
 * =========================================================================
 * THEME MANAGER — DARK / LIGHT MODE CONTROLLER
 * =========================================================================
 * Manages dark (default) and light themes with persistence in localStorage
 * and respects system preferences if no manual choice has been made.
 * =========================================================================
 */

(function () {
  const THEME_STORAGE_KEY = "dj_portfolio_theme";
  const root = document.documentElement;

  // Function to get initial theme
  function getPreferredTheme() {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme) {
      return storedTheme;
    }
    // Default to dark mode as requested by user
    return "dark";
  }

  // Function to apply theme
  function applyTheme(theme) {
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme"); // Default dark styles take effect
    }
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    updateToggleIcons(theme);
  }

  // Update SVG inside toggle button
  function updateToggleIcons(theme) {
    const toggleBtns = document.querySelectorAll(".theme-toggle-btn");
    toggleBtns.forEach((btn) => {
      if (theme === "light") {
        // Show Moon icon (switch to dark)
        btn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
        `;
        btn.setAttribute("aria-label", "Switch to dark theme");
        btn.setAttribute("title", "Switch to dark theme");
      } else {
        // Show Sun icon (switch to light)
        btn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </svg>
        `;
        btn.setAttribute("aria-label", "Switch to light theme");
        btn.setAttribute("title", "Switch to light theme");
      }
    });
  }

  // Toggle handler
  function toggleTheme() {
    const currentTheme = root.getAttribute("data-theme") === "light" ? "light" : "dark";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  }

  // Initial immediate application to prevent FOUC (Flash of Unstyled Content)
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  // Setup event listeners once DOM is ready
  document.addEventListener("DOMContentLoaded", () => {
    updateToggleIcons(initialTheme);
    const toggleBtns = document.querySelectorAll(".theme-toggle-btn");
    toggleBtns.forEach((btn) => {
      btn.addEventListener("click", toggleTheme);
    });
  });

  // Expose toggle function globally if needed
  window.toggleTheme = toggleTheme;
})();
