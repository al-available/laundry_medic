import './css/contact.css'

// navigation bar 
import { navBar } from './navbar'
navBar()


document.addEventListener("DOMContentLoaded", () => {

  /* ================= WEB3FORMS KEY ================= */

  const WEB3FORMS_ACCESS_KEY = [
    "8bcd61f9",
    "f3d3",
    "48b9",
    "9f32",
    "b3c1eb210cc3"
  ].join("-");

  const RATE_LIMIT_KEY = "contact_form_last_submit";
  const RATE_LIMIT_TIME = 60_000;


  /* ================= HELPERS ================= */

  const sanitize = str =>
    str.replace(/[<>\/\\{}$;]/g, "").trim();


  const isEmailValid = value =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);


  const isPhoneValid = value =>
    /^\+?[0-9\s\-]{9,15}$/.test(value);


  /* ================= TECH ALERT SYSTEM ================= */

  const TechAlert = (() => {

    if (!document.getElementById("tech-alert-style")) {

      const style = document.createElement("style");

      style.id = "tech-alert-style";

      style.innerHTML = `
        .tech-alert-wrapper {
          position: fixed;
          top: 2rem;
          right: 2rem;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .tech-alert {
          min-width: 28rem;
          max-width: 34rem;
          padding: 1.6rem 1.8rem;
          border-radius: 1.2rem;
          background: rgba(15,23,42,.96);
          color: #fff;
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          border: .1rem solid rgba(255,255,255,.1);
          animation: slideIn .3s ease;
        }

        .tech-alert.success {
          border-color: rgba(0, 255, 94, 0.5);
          background:green;
        }

        .tech-alert.error {
          border-color: rgba(239,68,68,.5);
        }

        .tech-alert.info {
          border-color: rgba(59,130,246,.5);
        }

        .tech-alert h4 {
          font-size: 1.4rem;
          margin-bottom: .4rem;
        }

        .tech-alert p {
          font-size: 1.3rem;
          color: #cbd5e1;
        }

        .tech-alert-close {
          cursor: pointer;
          font-size: 1.4rem;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(2rem);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideOut {
          to {
            opacity: 0;
            transform: translateX(2rem);
          }
        }
      `;

      document.head.appendChild(style);
    }

    let wrapper = document.querySelector(".tech-alert-wrapper");

    if (!wrapper) {
      wrapper = document.createElement("div");
      wrapper.className = "tech-alert-wrapper";
      document.body.appendChild(wrapper);
    }

    const showAlert = ({
      type,
      title,
      message,
      duration = 4000
    }) => {

      const alert = document.createElement("div");

      alert.className = `tech-alert ${type}`;

      alert.innerHTML = `
        <div>
          <h4>${title}</h4>
          <p>${message}</p>
        </div>

        <div class="tech-alert-close">✕</div>
      `;

      wrapper.appendChild(alert);

      const removeAlert = () => {

        alert.style.animation = "slideOut .3s ease forwards";

        setTimeout(() => {
          alert.remove();
        }, 300);
      };

      alert
        .querySelector(".tech-alert-close")
        .addEventListener("click", removeAlert);

      setTimeout(removeAlert, duration);
    };

    return {
      success: (t, m) =>
        showAlert({
          type: "success",
          title: t,
          message: m
        }),

      error: (t, m) =>
        showAlert({
          type: "error",
          title: t,
          message: m
        }),

      info: (t, m) =>
        showAlert({
          type: "info",
          title: t,
          message: m
        })
    };

  })();


  /* ================= FORM ================= */

  const contactForm = document.querySelector(".contact-form");

  const submitButton = document.querySelector(
    ".contact-form__submit"
  );


  const formFields = {
    name: contactForm.querySelector('[name="name"]'),
    email: contactForm.querySelector('[name="email"]'),
    phone: contactForm.querySelector('[name="phone"]'),
    message: contactForm.querySelector('[name="message"]')
  };


  /* ================= HONEYPOT ================= */

  const honeypot = document.createElement("input");

  honeypot.type = "text";
  honeypot.name = "website";
  honeypot.style.display = "none";

  contactForm.appendChild(honeypot);


  /* ================= FIELD ERROR ================= */

  const showFieldError = (field, message) => {

    clearFieldError(field);

    field.style.borderColor = "#ef4444";

    const error = document.createElement("small");

    error.className = "field-error";

    error.style.color = "#ef4444";
    error.style.fontSize = "1.2rem";
    error.style.marginTop = ".6rem";
    error.style.display = "block";

    error.textContent = message;

    field
      .closest(".contact-form__group")
      .appendChild(error);
  };


  const clearFieldError = field => {

    field.style.borderColor = "";

    field
      .closest(".contact-form__group")
      ?.querySelector(".field-error")
      ?.remove();
  };


  /* ================= VALIDATION ================= */

  const validateForm = () => {

    let valid = true;


    if (formFields.name.value.trim().length < 3) {

      showFieldError(
        formFields.name,
        "Enter your full name"
      );

      valid = false;
    }


    if (!isEmailValid(formFields.email.value)) {

      showFieldError(
        formFields.email,
        "Invalid email address"
      );

      valid = false;
    }


    if (!isPhoneValid(formFields.phone.value)) {

      showFieldError(
        formFields.phone,
        "Invalid phone number"
      );

      valid = false;
    }


    if (formFields.message.value.trim().length < 10) {

      showFieldError(
        formFields.message,
        "Message is too short"
      );

      valid = false;
    }

    return valid;
  };


  /* ================= SUBMIT ================= */

  contactForm.addEventListener("submit", e => {

    e.preventDefault();


    document
      .querySelectorAll(".field-error")
      .forEach(error => error.remove());


    /* Honeypot */
    if (honeypot.value) return;


    /* Rate Limit */
    const lastSubmit = localStorage.getItem(
      RATE_LIMIT_KEY
    );

    if (
      lastSubmit &&
      Date.now() - lastSubmit < RATE_LIMIT_TIME
    ) {

      TechAlert.error(
        "Slow Down",
        "Please wait before sending again"
      );

      return;
    }


    /* Validate */
    if (!validateForm()) {

      TechAlert.error(
        "Form Error",
        "Fix highlighted fields"
      );

      return;
    }


    /* Sanitize */
    Object.values(formFields).forEach(field => {

      field.value = sanitize(field.value);
    });


    /* Access Key */
    let accessKey = contactForm.querySelector(
      '[name="access_key"]'
    );

    if (!accessKey) {

      accessKey = document.createElement("input");

      accessKey.type = "hidden";
      accessKey.name = "access_key";

      contactForm.appendChild(accessKey);
    }

    accessKey.value = WEB3FORMS_ACCESS_KEY;


    submitButton.disabled = true;

    TechAlert.info(
      "Sending",
      "Submitting your message..."
    );


    fetch("https://api.web3forms.com/submit", {

      method: "POST",

      body: new FormData(contactForm),

      headers: {
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest"
      }

    })

      .then(response => response.json())

      .then(data => {

        if (!data.success) {
          throw new Error();
        }


        TechAlert.success(
          "Message Sent",
          "We will contact you shortly"
        );


        localStorage.setItem(
          RATE_LIMIT_KEY,
          Date.now()
        );


        contactForm.reset();
      })

      .catch(() => {

        TechAlert.error(
          "Submission Failed",
          "Please try again later"
        );

      })

      .finally(() => {

        submitButton.disabled = false;

        accessKey.value = "";
      });

  });


  /* ================= LIVE CLEAR ================= */

  Object.values(formFields).forEach(field => {

    field.addEventListener("input", () => {
      clearFieldError(field);
    });

  });

});