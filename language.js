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
      document.getElementById("error-title").textContent = "Страница не найдена";
      document.getElementById("error-description").textContent =
        "Проверьте адрес или вернитесь в портфолио.";
      document.getElementById("error-navigation").setAttribute("aria-label", "Навигация");

      const homeLink = document.getElementById("home-link");
      homeLink.href = "/ru/";
      homeLink.hreflang = "ru";
      homeLink.textContent = "Вернуться в портфолио";

      const alternateLink = document.querySelector("[data-language-link]");
      alternateLink.href = "/";
      alternateLink.hreflang = "en";
      alternateLink.lang = "en";
      alternateLink.textContent = "Portfolio in English";
    }
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
    const target = new URL(languageLink.href);
    target.hash = window.location.hash;
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
