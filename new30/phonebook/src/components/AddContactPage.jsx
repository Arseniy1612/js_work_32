import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddContactPage({ addContact, t }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !phone) return;
    addContact({ firstName, lastName, phone });
    navigate("/contacts");
  };

  const handleCancel = () => navigate("/contacts");

  return (
    <div className="page add-contact-page">
      <h2>{t("Додати контакт", "Add Contact")}</h2>
      <form className="contact-form" onSubmit={handleSave}>
        <input
          placeholder={t("Ім'я", "First Name")}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          placeholder={t("Прізвище", "Last Name")}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          placeholder={t("Телефон", "Phone")}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div className="form-buttons">
          <button type="submit">{t("Зберегти", "Save")}</button>
          <button type="button" onClick={handleCancel}>
            {t("Відміна", "Cancel")}
          </button>
        </div>
      </form>
    </div>
  );
}
