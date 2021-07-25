import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import TextField from "@material-ui/core/TextField";

import "./Contact.css";

function Contact(props) {
  // const { register, errors, handleSubmit, reset } = useForm();

  // const onSubmit = async (data) => {
  //   try {
  //     const templateParams = {
  //       name: data.name,
  //       email: data.email,
  //       subject: data.subject,
  //       message: data.message,
  //     };
  //     await emailjs.send(
  //       process.env.REACT_APP_SERVICE_ID,
  //       process.env.REACT_APP_TEMPLATE_ID,
  //       templateParams,
  //       process.env.REACT_APP_USER_ID
  //     );
  //     reset();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <>
      <h1 className="header">Contact / Location</h1>
      <div className="contact-page">
        {/* <form className="form-cont">
        <TextField name="name" type="text" placeholder="Name" />
        <TextField name="email" type="text" placeholder="Email" />
        <TextField name="subject" type="text" placeholder="Subject" />
        <TextField name="message" type="text" placeholder="Message" multiline />
      </form> */}
        <span className="size1">Email: Admin@mariposawellnessllc.com</span>
        <span className="size1">Phone: 202.819.0312</span>
        <p className="size1">
          Monday and Thursday 7a - 3:30p <br />
          District Center for Integrative Medicine <br />
          1915 I St NW, 7th Floor Washington DC, 20006 Metered <br />
          Street Parking, Multiple Garages,
          <br /> 1 block from Farragut West, 3 blocks from Farragut North
        </p>
        <p className="size1">
          Wednesday 9a - 5p <br />
          Back Yard Clinic <br />
          403 Leighton Ave Silver Spring, MD 20910
        </p>
        <p className="size1">
          The Back Yard Clinic is a detached building behind a home residence.
          <br />
          To access the clinic, please enter through the wooden gate at the
          driveway, <br />
          follow the path around to the back yard. <br />
          Please do not go to the front door of the main residence.
        </p>
        <p className="size1">
          Interested in becoming a new patient? <br />
          Email us at admin@mariposawellnessllc.com <br />
          or <br />
          call 202.819.0312
        </p>
      </div>
    </>
  );
}

export default Contact;
