const toggleBtn = document.getElementById("dark-mode");

function updateButtonText(isDarkMode) {
    toggleBtn.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
  }

// EventListener to toggle to darkmode
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    //  store preference in localStorage
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
    updateButtonText(isDarkMode)
});



// Load dark mode preference on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    if (savedMode) {
      document.body.classList.add("dark-mode");
    }
  });

  