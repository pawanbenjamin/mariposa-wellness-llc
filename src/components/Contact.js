import React from "react";

import emailjs from "emailjs-com";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./Contact.css";

function Contact(props) {
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

        <form className="form-cont">
          <TextField name="name" type="text" placeholder="Name" />
          <TextField name="email" type="text" placeholder="Email" />
          <TextField name="subject" type="text" placeholder="Subject" />
          <TextField
            name="message"
            type="text"
            placeholder="Message"
            multiline
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </>
  );
}

export default Contact;
