import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../App.css";

const formikForm = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="form-container">
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form data:", values);
          alert("Registration successful!");
          resetForm();
        }}
      >
        <Form className="registration-form">
          <h2>Create Account</h2>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Field
              type="text"
              name="username"
              placeholder="Enter username"
            />
            <ErrorMessage name="username" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              name="email"
              placeholder="Enter email"
            />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error"
            />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default formikForm;
