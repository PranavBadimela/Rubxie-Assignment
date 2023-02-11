import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";

const Form = () => {
  const initialValues = { username: "", email: "", mobile: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.mobile) {
      errors.mobile = "mobile number is required";
    } else if (values.mobile.length < 4) {
      errors.mobile = "mobile number must be  10 numbers";
    }
    return errors;
  };

  return (
    <div id="form-container">
      <div className="left-part">
        <h1>GET IN TOUCH</h1>
        <p>Please fill the form and will get back to you.</p>
      </div>

      <div className="vertical-line"></div>

      <form className="form-container" onSubmit={handleSubmit}>
        <div className="input-items">
          <label>*Name</label>
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            placeholder="Enter Your Name"
          />
          <p className="err-msg">{formErrors.username}</p>
        </div>

        <div className="input-items">
          <label>*Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
          />
          <p className="err-msg">{formErrors.email}</p>
        </div>

        <div className="input-items">
          <label>*Mobile Number</label>
          <input
            type="text"
            name="mobile"
            value={formValues.mobile}
            onChange={handleChange}
            placeholder="Enter Your Mobile Number"
          />
          <p className="err-msg">{formErrors.mobile}</p>
        </div>

        <button>Register Now</button>
      </form>
    </div>
  );
};

export default Form;
