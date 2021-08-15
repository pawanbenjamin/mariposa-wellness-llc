import React from "react";

import emailjs from "emailjs-com";

import { init } from "emailjs-com";
init("user_PLmAZyBbB7QDAYuit7CiQ");

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./Contact.css";

function Contact(props) {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ar83r8q",
        "template_5mfcpp8",
        e.target,
        "user_PLmAZyBbB7QDAYuit7CiQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <h1 className="header">Contact</h1>
      <div className="contact-page">
        <div className="interested">
          <h2>
            Interested in becoming a new Patient?
            <br />
            Please fill out the form below <br />
            and we will get back to you as soon as possible
          </h2>
        </div>

        <form className="form-cont" onSubmit={sendEmail}>
          <TextField name="name" type="text" placeholder="Name" />
          <TextField name="email" type="text" placeholder="Email" />
          <TextField name="subject" type="text" placeholder="Subject" />
          <TextField
            name="message"
            type="text"
            placeholder="Message"
            multiline
          />
          <button className="book" size="small" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
