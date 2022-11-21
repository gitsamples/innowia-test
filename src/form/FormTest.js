import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

function FormTest() {
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="register-form">
          <div className="bg-light p-4 rounded shadow">
            <h4>Sign up</h4>
            <hr/>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-2">
                <label>Username</label>
                <input
                  name="username"
                  type="text"
                  {...register("username")}
                  className={`form-control ${
                    errors.username ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.username?.message}
                </div>
              </div>

              <div className="mb-2">
                <label>Email</label>
                <input
                  name="email"
                  type="text"
                  {...register("email")}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">{errors.email?.message}</div>
              </div>

              <div className="mb-2">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  {...register("password")}
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.password?.message}
                </div>
              </div>
              <div className="mb-2">
                <label>Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="password"
                  {...register("confirmPassword")}
                  className={`form-control ${
                    errors.confirmPassword ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.confirmPassword?.message}
                </div>
              </div>

              <div className="mb-2 form-check">
                <input
                  id="acceptTerms"
                  name="acceptTerms"
                  type="checkbox"
                  {...register("acceptTerms")}
                  className={`form-check-input ${
                    errors.acceptTerms ? "is-invalid" : ""
                  }`}
                />
                <label htmlFor="acceptTerms" className="form-check-label">
                  <small>I have read and agree to the Terms</small>
                </label>
                <div className="invalid-feedback">
                  {errors.acceptTerms?.message}
                </div>
              </div>

              <div className="mb-2">
                <button type="submit" className="btn btn-dark me-3">
                  Register
                </button>
                <button
                  type="button"
                  onClick={() => reset()}
                  className="btn btn-link text-decoration-none"
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

export default FormTest;
