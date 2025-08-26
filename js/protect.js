// Custom Toast Function
function showToast(message, type = "info", duration = 3000) {
  const toastContainer = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  toastContainer.appendChild(toast);

  // Show the toast
  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  // Hide and remove after duration
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, duration);
}

// Disable Right-Click Context Menu
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  showToast("Right-click is disabled for security reasons.", "error");
});

// Disable Keyboard Shortcuts for Developer Tools
document.addEventListener("keydown", function (e) {
  // Disable F12
  if (e.keyCode === 123) {
    e.preventDefault();
    showToast("Developer Tools are disabled.", "error");
    return false;
  }
  // Disable Ctrl+Shift+I/J/C (Inspect/Console/Search)
  if (
    e.ctrlKey &&
    e.shiftKey &&
    (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)
  ) {
    e.preventDefault();
    showToast("Inspect mode is disabled.", "error");
    return false;
  }
  // Disable Ctrl+U (View Source)
  if (e.ctrlKey && e.keyCode === 85) {
    e.preventDefault();
    showToast("Viewing source is disabled.", "error");
    return false;
  }
  // Disable Ctrl+S (Save Page)
  if (e.ctrlKey && e.keyCode === 83) {
    e.preventDefault();
    showToast("Saving page is disabled.", "error");
    return false;
  }
});

// Prevent Copying
document.addEventListener("copy", function (e) {
  e.preventDefault();
  showToast("Copying is disabled on this site.", "error");
});

// Disable Image Dragging
document.querySelectorAll("img").forEach(function (img) {
  img.addEventListener("dragstart", function (e) {
    e.preventDefault();
    showToast("Image dragging is disabled.", "error");
  });
});

// Optional: Detect Dev Tools (Experimental)
(function () {
  const threshold = 200;
  setInterval(function () {
    const devToolsOpen =
      window.outerWidth - window.innerWidth > threshold ||
      window.outerHeight - window.innerHeight > threshold;
    if (devToolsOpen) {
      document.body.innerHTML =
        "<h1>Developer Tools detected. Please close them to view the site.</h1>";
      showToast("Developer Tools detected!", "error", 5000); // Note: This may not show if body is overwritten
    }
  }, 1000);
})();
