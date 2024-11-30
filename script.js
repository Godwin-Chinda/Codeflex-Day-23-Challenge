document.addEventListener("DOMContentLoaded", function () {
  const themeToggleButton = document.getElementById("themeToggle");
  const page = document.getElementById("page");

  themeToggleButton.addEventListener("click", function () {
    const isDarkMode = page.classList.toggle("dark-mode");
    page.classList.toggle("light-mode", !isDarkMode);

    themeToggleButton.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
  });
});
