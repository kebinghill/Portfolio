import React from "react";
import { Link } from "react-router-dom";

const ContactButton = ({ mailto, label }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location = mailto;
        e.preventDefault();
      }}
      className="contact-button"
    >
      {label}
    </Link>
  );
};

export default ContactButton;
