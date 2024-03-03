import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer main-wrapper">
      <div className="footer__info main-component">
        <div className="footer__info-text">
          <h2>do you need more information?</h2>
          <p>
            Connect with us today. Our dedicated experts are here to provide you
            with exceptional support and prompt responses.
          </p>
        </div>
        <div className="footer__info-contacts">
          <div>
            <img src="../..//img/envelope.svg" alt="" />
            <Link to="mailto:info@admissionscounselling.uz">
              info@admissionscounselling.uz
            </Link>
          </div>
          <div>
            <img src="../..//img/phone-ringing.svg" alt="" />
            <Link to="tel:16477407430">+16477407430</Link>
          </div>
        </div>
        <div className="promo">
          <h3>
            Made By{" "}
            <Link className="arctiq" target="_blank" to="https://arctiq.uz">
              Arctiq
            </Link>
          </h3>
        </div>
      </div>

      <div className="footer__info-social main-component">
        <div>
          <h2>TalimZone</h2>
        </div>
        <div>
          <p>Follow us on social media | </p>
          <Link
            target="_blank"
            to="https://www.instagram.com/admissions_counseling/"
          >
            <img className="footer__img" src="/img/instagram.svg" alt="" />
          </Link>
          <Link
            target="_blank"
            to="https://t.me/admission_counseling"
          >
            <img className="footer__img" src="/img/telegram.svg" alt="" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
