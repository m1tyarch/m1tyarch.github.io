(() => {
  const storageKey = "portfolio-language";
  const errorPage = document.querySelector("[data-error-page]");

  if (errorPage) {
    let preferredLanguage;

    try {
      preferredLanguage = localStorage.getItem(storageKey);
    } catch {
      // The English fallback and both language links also work without storage.
    }

    if (preferredLanguage === "ru") {
      document.documentElement.lang = "ru";
      document.title = "Страница не найдена — Дмитрий Костромицкий";

      const errorTitle = document.getElementById("error-title");
      const errorDescription = document.getElementById("error-description");
      const errorNav = document.getElementById("error-navigation");
      const homeLink = document.getElementById("home-link");
      const alternateLink = document.querySelector("[data-language-link]");
      const footerText = document.getElementById("footer-text");

      if (errorTitle) errorTitle.textContent = "Страница не найдена";
      if (errorDescription) errorDescription.textContent = "Проверьте адрес или вернитесь в портфолио.";
      if (errorNav) errorNav.setAttribute("aria-label", "Навигация");

      if (homeLink) {
        homeLink.href = "/ru/";
        homeLink.hreflang = "ru";
        homeLink.textContent = "Вернуться в портфолио";
      }

      if (alternateLink) {
        alternateLink.href = "/";
        alternateLink.hreflang = "en";
        alternateLink.lang = "en";
        alternateLink.textContent = "Portfolio in English";
      }

      if (footerText) {
        footerText.textContent = "© 2026 Дмитрий Костромицкий";
      }
    }

    document.documentElement.removeAttribute("data-lang-pending");
  } else {
    // The URL selects the language. A saved preference must not redirect a
    // visitor who deliberately opens the English or Russian page.
    try {
      localStorage.setItem(storageKey, document.documentElement.lang);
    } catch {
      // Language-specific URLs still preserve the choice when reloading.
    }
  }

  const languageLink = document.querySelector("[data-language-link]");
  if (!languageLink) return;

  const updateLanguageLink = () => {
    const target = new URL(languageLink.href, window.location.href);
    target.hash = errorPage ? "" : window.location.hash;
    languageLink.href = target.href;
  };

  updateLanguageLink();
  window.addEventListener("hashchange", updateLanguageLink);

  languageLink.addEventListener("click", () => {
    try {
      localStorage.setItem(storageKey, languageLink.hreflang);
    } catch {
      // Keep normal link navigation when storage is unavailable.
    }
  });
})();
