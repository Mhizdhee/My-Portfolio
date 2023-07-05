import React from "react";
import "../Styles/Contact.css";
import { useFormik } from "formik";

const Contact = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <div className="form">
          <form onSubmit={formik.handleSubmit}>
            <input
              id="firstName"
              name="firstName"
              placeholder="FIRST NAME"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            {formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}

            <input
              id="lastName"
              name="lastName"
              placeholder="LAST NAME"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            {/* <br /> */}
            {formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}

            <input
              id="email"
              name="email"
              type="email"
              placeholder="EMAIL ADDRESS"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {/* <br /> */}

            {formik.errors.email ? <div>{formik.errors.email}</div> : null}

            <textarea
              rows={10}
              cols={50}
              id="message"
              name="message"
              placeholder="MESSAGE"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.message}
            />

            <button className="buttton" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
