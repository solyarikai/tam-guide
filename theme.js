// Theme toggle — persists in localStorage
(function() {
  var STORAGE_KEY = 'tam-guide-theme';

  function getTheme() {
    try { return localStorage.getItem(STORAGE_KEY); } catch(e) { return null; }
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch(e) {}
  }

  // Apply saved theme immediately (before paint)
  var saved = getTheme();
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  // Toggle handler — attached after DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.addEventListener('click', function() {
      var current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  });
})();
