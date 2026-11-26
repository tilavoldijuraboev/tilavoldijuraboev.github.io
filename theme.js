(function() {
  const savedTheme = localStorage.getItem('site-theme') || 'standart';
  const savedDark = localStorage.getItem('site-dark') === 'true';

  if (savedTheme !== 'standart') {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
  if (savedDark) {
    document.documentElement.setAttribute('data-dark', 'true');
  }

  window.addEventListener('DOMContentLoaded', () => {
    const themeSelect = document.getElementById('theme-select');
    const darkBtn = document.getElementById('dark-toggle');

    if (themeSelect) {
      themeSelect.value = savedTheme;
      themeSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        localStorage.setItem('site-theme', val);
        if (val === 'standart') {
          document.documentElement.removeAttribute('data-theme');
        } else {
          document.documentElement.setAttribute('data-theme', val);
        }
      });
    }

    if (darkBtn) {
      darkBtn.innerText = savedDark ? '☀️ Kun' : '🌙 Tun';
      darkBtn.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-dark') === 'true';
        if (isDark) {
          document.documentElement.removeAttribute('data-dark');
          localStorage.setItem('site-dark', 'false');
          darkBtn.innerText = '🌙 Tun';
        } else {
          document.documentElement.setAttribute('data-dark', 'true');
          localStorage.setItem('site-dark', 'true');
          darkBtn.innerText = '☀️ Kun';
        }
      });
    }
  });
})();
