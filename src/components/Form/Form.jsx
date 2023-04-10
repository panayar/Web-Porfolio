import React from "react";
import "./Form.css";

function Form() {
  return (
    <div class="contact">
      <h1 className="text-center" data-aos="fade-left" data-aos-duration="1800">
        Contact
        <span className="orange-point">.</span>
      </h1>
      <div class="form-container">
        <img
          src="http://drive.google.com/uc?export=view&id=1c1Bkplhr1QpWQLxeuCD51EFYyTwkRJWc"
          alt="logo"
          class="contactLogo"
        />

        <form action="/" class="form">
          <label for="name" class="label">
            Name
          </label>
          <input
            type="name"
            id="mail"
            placeholder="Name"
            class="input input-email"
          />

          <label for="mail" class="label">
            Email address
          </label>
          <input
            type="email"
            id="mail"
            placeholder="johndoe@email.com"
            class="input input-email"
          />

          <label for="password" class="label">
            Message
          </label>
          <textarea placeholder="Write your message"></textarea>

          <input
            type="submit"
            value="Submit"
            class="primary-button login-button"
          />

          <div class="social-media">
            <a
              target="_blank"
              href="https://github.com/panayar"
              rel="noreferrer"
            >
              <img
                class="social-icon"
                src="http://drive.google.com/uc?export=view&id=1zKvaXauX5kL0-RJ3-9j9Nr0CaiAamOsU"
                alt="github"
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/paulaanaya/"
              rel="noreferrer"
            >
              <img
                class="social-icon"
                src="http://drive.google.com/uc?export=view&id=1uAhoYeHp49TlVNDsEFJfZ36aZqkd_RiR"
                alt="linkedin"
              />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
