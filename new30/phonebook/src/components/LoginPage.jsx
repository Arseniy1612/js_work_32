import React, { useState } from "react";

export default function LoginPage({ setIsAuth, t }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Любой ввод проходит
    setIsAuth(true);
  };

  return (
    <div className="page login-page">
      <h2>{t("Вхід", "Login")}</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{t("Вхід", "Login")}</button>
      </form>
    </div>
  );
}
