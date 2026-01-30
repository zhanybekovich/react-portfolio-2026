import Container from "../container/Container";
import SectionTitle from "../section-title/SectionTitle";
import "./contacts.css";

function Contacts({ data }) {
  return (
    <section className="contact">
      <Container>
        <div className="contact-wrapper">
          <div className="contact-left">
            <SectionTitle text={data.title} />
            <p className="contact-text">{data.description}</p>
            <p className="contact-phone">{data.phone}</p>
            <p className="contact-email">{data.email}</p>
            <p className="contact-socials">
              <a href={data.instagram} target="_blank" className="contact-link">
                <img
                  src="/images/instagram.svg"
                  alt=""
                  className="contact-icon"
                />
              </a>
              <a href={data.facebook} target="_blank" className="contact-link">
                <img
                  src="/images/facebook.svg"
                  alt=""
                  className="contact-icon"
                />
              </a>
              <a href={data.telegram} target="_blank" className="contact-link">
                <img
                  src="/images/telegram.svg"
                  alt=""
                  className="contact-icon"
                />
              </a>
            </p>
          </div>
          <div className="contact-right">
            <form className="contact-form">
              <div className="contact-form-top">
                <label className="contact-form-label">
                  Ваше ім’я <br />
                  <input
                    type="text"
                    className="contact-form-input"
                    placeholder="Іван"
                  />
                </label>
                <label className="contact-form-label">
                  Номер телефона <br />
                  <input
                    type="number"
                    className="contact-form-input"
                    placeholder="+380501111111"
                  />
                </label>
              </div>
              <label className="contact-form-label">
                Ваше повідомлення <br />
                <textarea className="contact-form-textarea">
                  Текст вашого повідомлення
                </textarea>
              </label>
              <button className="contact-btn">Надіслати</button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contacts;
