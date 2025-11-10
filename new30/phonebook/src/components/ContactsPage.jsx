import React from "react";
import { useNavigate } from "react-router-dom";

export default function ContactsPage({ contacts, deleteContact, t }) {
  const navigate = useNavigate();

  return (
    <div className="page contacts-page">
      <h2>{t("Список контактів", "Contacts")}</h2>
      <button className="back-btn" onClick={() => navigate("/add")}>
        {t("На головну", "Home")}
      </button>

      <table className="contacts-table">
        <thead>
          <tr>
            <th>{t("Ім'я", "First Name")}</th>
            <th>{t("Прізвище", "Last Name")}</th>
            <th>{t("Телефон", "Phone")}</th>
            <th>{t("Дії", "Actions")}</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c, i) => (
            <tr key={i}>
              <td>{c.firstName}</td>
              <td>{c.lastName}</td>
              <td>{c.phone}</td>
              <td>
                <button className="delete-btn" onClick={() => deleteContact(i)}>
                  {t("Видалити", "Delete")}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
