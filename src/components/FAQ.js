import React from "react";
import { Link } from "react-router-dom";

import "./FAQ.css";

function FAQ(props) {
  return (
    <div className="FAQ">
      <div className="topic">
        <h1>Insurance</h1>

        <p>
          Mariposa Wellness is an out-of-network outpatient physical therapy
          provider. <br />
          This means that the client is responsible for paying the full fee at
          the time of service. <br />
          We will issue a superbill that can be submitted by the client to their
          <br />
          insurance for direct reimbursement. Each insurance company and plan is
          different. <br />
          We recommend contacting your insurance company directly <br />
          to find out what your coverage is for “outpatient physical therapy.”
        </p>
      </div>
      <div className="topic">
        <h1>Fees</h1>
        <p>
          Initial Evaluation: $230 <br />
          60 min follow-up appointment: $195
          <br />
          Accessibility Rates - At Mariposa Wellness we understand the
          exceptional cost <br />
          of medical care especially for folks looking to find solutions <br />
          for health and healing outside of the traditional medical model.{" "}
          <br />
          Because of this we keep 15% of our schedule available for folks
          <br />
          needing treatment but unable to pay the full cost. <br />
          If you are interested this option please{" "}
          <Link to="/contact">Contact Us!</Link>
        </p>
      </div>
      <div className="topic">
        <h1>Cancellation Policy</h1>
        <p>
          Cancellations must be received with in 48hrs of the scheduled
          appointment. <br />
          The full session amount will be charged for cancellations received
          later than 48hrs.{" "}
        </p>
      </div>
      <div className="topic">
        <h1>Medicare</h1>
        <p>
          Medicare - Mariposa Wellness is not a participating provider with
          medicare. <br />
          If you are a medicare recipient and interested in receiving our
          services, <br />
          we can see you as a “wellness” client. <br />
          This means you will not be issued a superbill for submitting to
          insurance.{" "}
        </p>
      </div>
    </div>
  );
}

export default FAQ;
