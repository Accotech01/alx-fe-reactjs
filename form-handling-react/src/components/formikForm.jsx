import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../App.css";

const FormikForm = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        alert("Registration successful!");
        resetForm();
      }}
    >
      <Form className="registration-form">
        <h2>Create Account</h2>

        <div className="form-group">
          <label>Username</label>
          <Field type="text" name="username" />
          <ErrorMessage name="username" component="p" className="error" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="p" className="error" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="p" className="error" />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
