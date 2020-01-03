import React from "react";

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact; // Taking this from contact prop

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          className={
            "badge " +
            (type === "proffesional" ? "badge-sucess" : "badge-primary") // Checking for type of a badge, if proffesional - success, if not - primary
          }
        >
          {type}
        </span>
      </h3>
    </div>
  );
};

export default ContactItem;
