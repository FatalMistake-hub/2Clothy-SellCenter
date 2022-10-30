import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import ImageLight from "../../assets/img/create-account-office.jpeg";
import ImageDark from "../../assets/img/create-account-office-dark.jpeg";
import { GithubIcon, TwitterIcon } from "../../icons";
import { Input, Label, Button } from "@windmill/react-ui";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../services/authService";
function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errorResponse, setErrorResponse] = useState("");
  const Register = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Bắt buộc!")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Vui lòng nhập một địa chỉ email hợp lệ!"
        ),
      password: Yup.string()
        .required("Bắt buộc!")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          "Mật khẩu phải có 7-19 ký tự và chứa ít nhất một chữ cái, một số và một ký tự đặc biệt!"
        ),
      confirmPassword: Yup.string()
        .required("Bắt buộc!")
        .oneOf(
          [Yup.ref("password"), null],
          "Mật khẩu nhập lại không trùng khớp!"
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
      const newUser = {
        Email: values.email,
        Password: values.password,
        ConfirmPassword: values.confirmPassword,
      };
      const fetchApi = async () => {
        const res = await registerUser(newUser, dispatch, history);
        setErrorResponse(res);
      };
      fetchApi();
    },
  });
  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Create account
              </h1>
              <form onSubmit={Register.handleSubmit}>
                <Label>
                  <span>Email</span>
                  <Input
                    id="email"
                    name="email"
                    value={Register.values.email}
                    onChange={Register.handleChange}
                    className="mt-1"
                    type="email"
                    placeholder="Enter your email"
                  />
                  {Register.errors.email && (
                    <div>
                      <p>* {Register.errors.email} </p>
                    </div>
                  )}
                </Label>
                <Label className="mt-4">
                  <span>Password</span>
                  <Input
                    id="password"
                    name="password"
                    value={Register.values.password}
                    onChange={Register.handleChange}
                    className="mt-1"
                    placeholder="***************"
                    type="password"
                  />
                  {Register.errors.password && (
                    <div>
                      <p>* {Register.errors.password} </p>
                    </div>
                  )}
                </Label>
                <Label className="mt-4">
                  <span>Confirm password</span>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    value={Register.values.confirmPassword}
                    onChange={Register.handleChange}
                    className="mt-1"
                    placeholder="***************"
                    type="password"
                  />
                  {Register.errors.confirmPassword ? (
                    <div>
                      <p>* {Register.errors.confirmPassword} </p>
                    </div>
                  ) : (
                    ""
                  )}
                </Label>

                {/* <Label className="mt-6" check>
                  <Input type="checkbox" />
                  <span className="ml-2">
                    I agree to the{" "}
                    <span className="underline">privacy policy</span>
                  </span>
                </Label> */}

                <Button type="submit" block className="mt-4">
                  Create account
                </Button>
              </form>

              <hr className="my-8" />

              {/* <Button block layout="outline">
                <GithubIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Github
              </Button>
              <Button block className="mt-4" layout="outline">
                <TwitterIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Twitter
              </Button> */}
              {errorResponse ? (
                <div>
                  <p>{errorResponse}</p>
                </div>
              ) : (
                ""
              )}

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-orange-600 dark:text-orange-400 hover:underline"
                  to="/login"
                >
                  Already have an account? Login
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Login;
