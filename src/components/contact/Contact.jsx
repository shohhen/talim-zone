import "./contact.scss";
import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("Send");
  const [formData, setFormData] = useState({
    "entry.60484236": "",
    "entry.1638156965": "",
    "entry.1764982621": "",
    "entry.508294123": "",
    "entry.1785535821": "",
  });

  const handleChange = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
    setStatus("Send");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending");

    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSeCwAdZfaymDcDmc8-2juMLLbYJgGPNIrTVXMDejMgW_2lNJA/formResponse";

    const formDataEntries = Object.entries(formData)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formDataEntries,
    };

    try {
      const res = await fetch(googleFormUrl, requestOptions);
      if (res.ok) {
        setStatus("Sent");
        setFormData({
          "entry.60484236": "",
          "entry.1638156965": "",
          "entry.1764982621": "",
          "entry.508294123": "",
          "entry.1785535821": "",
        });
      } else {
        setStatus("Error");
      }
    } catch (error) {
      setStatus("Error");
    }
  };

  return (
    <div className="contact main-wrapper" id="contact">
      <div className="contact__block main-component">
        <h2>Register for Free Counsultation</h2>
        <form
          onSubmit={handleSubmit}
          target="_self"
          className="contact__block-form"
        >
          <input
            name="entry.60484236"
            value={formData["entry.60484236"]}
            onChange={handleChange("entry.60484236")}
            required
            autoComplete={"off"}
            type="text"
            placeholder="Your Full Name"
          />
          <input
            name="entry.1638156965"
            value={formData["entry.1638156965"]}
            onChange={handleChange("entry.1638156965")}
            required
            autoComplete={"off"}
            type="email"
            placeholder="Your Email"
          />
          <input
            type="text"
            placeholder="Your Telegram Username (if applicable)"
            name="entry.1764982621"
            value={formData["entry.1764982621"]}
            onChange={handleChange("entry.1764982621")}
            required
            autoComplete={"off"}
          />
          <input
            type="tel"
            placeholder="your phone number"
            name="entry.508294123"
            value={formData["entry.508294123"]}
            onChange={handleChange("entry.508294123")}
            required
            autoComplete={"off"}
          />
          <textarea
            name="entry.1785535821"
            value={formData["entry.1785535821"]}
            onChange={handleChange("entry.1785535821")}
            required
            autoComplete={"off"}
            placeholder="Your Message"
          ></textarea>
          <button className="contact__block-form-submit" type="submit">
            {status}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
