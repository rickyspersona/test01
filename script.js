const themeToggle = document.querySelector(".theme-toggle");

function setThemeToggleLabel(isLight) {
  themeToggle.textContent = isLight ? "Dark" : "Light";
  themeToggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark theme" : "Switch to light theme"
  );
}

if (themeToggle) {
  var isLightTheme = document.body.classList.contains("light-theme");

  setThemeToggleLabel(isLightTheme);

  themeToggle.addEventListener("click", () => {
    isLightTheme = document.body.classList.toggle("light-theme");

    setThemeToggleLabel(isLightTheme);

    try {
      localStorage.setItem("theme", isLightTheme ? "light" : "dark");
    } catch (error) {
      // Ignore storage failures so the visual toggle still works.
    }
  });
}
