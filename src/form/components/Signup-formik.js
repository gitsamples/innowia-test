import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Signup() {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });

  const formik = useFormik({
    initialValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
    validationSchema,
    // validateOnChange: false,
    // validateOnBlur: false,
    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
    },
  });
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="register-form">
          <div className="bg-light p-4 rounded shadow">
            <h4>Sign up</h4>
            <hr />
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-2">
                <label htmlFor="username"> Username </label>
                <input
                  name="username"
                  type="text"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />
                <div className="text-danger">
                  {formik.errors.username ? formik.errors.username : null}
                </div>
              </div>

              <div className="mb-2">
                <label htmlFor="email"> Email </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <div className="text-danger">
                  {formik.errors.email ? formik.errors.email : null}
                </div>
              </div>

              <div className="mb-2">
                <label htmlFor="password"> Password </label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                <div className="text-danger">
                  {formik.errors.password ? formik.errors.password : null}
                </div>
              </div>

              <div className="mb-2">
                <label htmlFor="confirmPassword"> Confirm Password </label>
                <input
                  name="confirmPassword"
                  type="password"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                />
                <div className="text-danger">
                  {formik.errors.confirmPassword
                    ? formik.errors.confirmPassword
                    : null}
                </div>
              </div>

              <div className="mb-2 form-check">
                <input
                  id="acceptTerms"
                  name="acceptTerms"
                  type="checkbox"
                  className="form-check-input"
                  onChange={formik.handleChange}
                  value={formik.values.acceptTerms}
                />
                <label htmlFor="acceptTerms" className="form-check-label">
                    <small>I have read and agree to the Terms</small>
                </label>
                <div className="text-danger">
                  {formik.errors.acceptTerms ? formik.errors.acceptTerms : null}
                </div>
              </div>

              <div className="mb-2">
                <button type="submit" className="btn btn-dark me-3">
                  Register
                </button>
                <button
                  type="button"
                  className="btn btn-link text-decoration-none"
                  onClick={formik.handleReset}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
