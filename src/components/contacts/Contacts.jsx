import { useState } from "react";
import Container from "../container/Container";
import SectionTitle from "../section-title/SectionTitle";
import "./contacts.css";

function Contacts({ data }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function validate() {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Введіть ім’я";
    }

    const phoneRegex = /^\+380\d{9}$/;
    if (!form.phone.trim()) {
      newErrors.phone = "Введіть номер телефону";
    } else if (!phoneRegex.test(form.phone)) {
      newErrors.phone = "Формат: +380XXXXXXXXX";
    }

    if (!form.message.trim()) {
      newErrors.message = "Введіть повідомлення";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    console.log("Дані валідні:", form);

    // имитация успешной отправки
    setIsSubmitted(true);
  }

  return (
    <section className="contact">
      <Container>
        <SectionTitle text={data.title} />

        <div className="contact-wrapper">
          <div className="contact-left">
            <p className="contact-text">{data.description}</p>
            <p className="contact-phone">{data.phone}</p>
            <p className="contact-email">{data.email}</p>
          </div>

          <div className="contact-right">
            {!isSubmitted ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-top">
                  <label className="contact-form-label">
                    Ваше ім’я <br />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="contact-form-input"
                      placeholder="Іван"
                    />
                    {errors.name && (
                      <span className="error">{errors.name}</span>
                    )}
                  </label>

                  <label className="contact-form-label">
                    Номер телефона <br />
                    <input
                      type="text"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="contact-form-input"
                      placeholder="+380501111111"
                    />
                    {errors.phone && (
                      <span className="error">{errors.phone}</span>
                    )}
                  </label>
                </div>

                <label className="contact-form-label">
                  Ваше повідомлення <br />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="contact-form-textarea"
                  />
                  {errors.message && (
                    <span className="error">{errors.message}</span>
                  )}
                </label>

                <button className="contact-btn" type="submit">
                  Надіслати
                </button>
              </form>
            ) : (
              <div className="contact-success">
                <h3>✅ Дякуємо!</h3>
                <p>Ваше повідомлення успішно надіслано.</p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contacts;
