import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Menu from "./components/Menu.jsx";
import ContactsPage from "./components/ContactsPage.jsx";
import AddContactPage from "./components/AddContactPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import "./App.css";

export default function App() {
  // Начальные контакты с примерами
  const initialContacts = [
    { firstName: "Іван", lastName: "Іваненко", phone: "+380501112233" },
    { firstName: "Марія", lastName: "Петренко", phone: "+380672223344" },
    { firstName: "John", lastName: "Doe", phone: "+123456789" },
  ];

  const [contacts, setContacts] = useState(initialContacts);
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("ua");
  const [isAuth, setIsAuth] = useState(false);

  const t = (ua, en) => (lang === "ua" ? ua : en);

  const addContact = (contact) => setContacts([...contacts, contact]);
  const deleteContact = (index) => setContacts(contacts.filter((_, i) => i !== index));

  return (
    <Router>
      <div className={`app ${theme}`}>
        <Menu
          isAuth={isAuth}
          theme={theme}
          lang={lang}
          setTheme={setTheme}
          setLang={setLang}
          t={t}
        />

        <main>
          <Routes>
            {!isAuth ? (
              <Route path="*" element={<LoginPage setIsAuth={setIsAuth} t={t} />} />
            ) : (
              <>
                <Route
                  path="/contacts"
                  element={<ContactsPage contacts={contacts} deleteContact={deleteContact} t={t} />}
                />
                <Route
                  path="/add"
                  element={<AddContactPage addContact={addContact} t={t} />}
                />
                <Route path="*" element={<Navigate to="/contacts" />} />
              </>
            )}
          </Routes>
        </main>
      </div>
    </Router>
  );
}
