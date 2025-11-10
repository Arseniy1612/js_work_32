import React from "react";

export default function Menu({ isAuth, theme, lang, setTheme, setLang, t }) {
  return (
    <header style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <h1>{t("Телефонная книга", "Phonebook")}</h1>
      <div>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {t("Сменить тему", "Toggle Theme")}
        </button>
        <button onClick={() => setLang(lang === "ua" ? "en" : "ua")}>
          {t("Сменить язык", "Toggle Lang")}
        </button>
      </div>
    </header>
  );
}
