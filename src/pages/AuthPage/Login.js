import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import ImageLight from "../../assets/img/login-office.jpeg";
import ImageDark from "../../assets/img/login-office-dark.jpeg";
import Clothy from "../../assets/img/login-logo.png";
import { GithubIcon, TwitterIcon } from "../../icons";
import { Label, Input, Button } from "@windmill/react-ui";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginUser } from "../../services/authService";
function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errorResponse, setErrorResponse] = useState("");
  const Login = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      // email: Yup.string()
      //   .required("Bắt buộc!")
      //   .matches(
      //     /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      //     "Vui lòng nhập một địa chỉ email hợp lệ!"
      //   ),
      // password: Yup.string()
      //   .required("Bắt buộc!")
      //   .matches(
      //     /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
      //     "Mật khẩu phải có 7-19 ký tự và chứa ít nhất một chữ cái, một số và một ký tự đặc biệt!"
      //   ),
    }),
    onSubmit: (values) => {
      const newUser = {
        Email: values.email,
        Password: values.password,
      };
      const fetchApi = async () => {
        const res = await loginUser(newUser, dispatch, history);
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
              src={Clothy}
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
              <form onSubmit={Login.handleSubmit}>
                <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                  Login
                </h1>
                <Label>
                  <span>Email</span>
                  <Input
                    id="email"
                    name="email"
                    value={Login.values.email}
                    onChange={Login.handleChange}
                    className="mt-1"
                    type="text"
                    placeholder="Enter your email"
                  />
                  {Login.errors.email && (
                    <div className={"errorBox"}>
                      <p className={"errorMsg"}>* {Login.errors.email} </p>
                    </div>
                  )}
                </Label>

                <Label className="mt-4">
                  <span>Password</span>
                  <Input
                    id="password"
                    name="password"
                    value={Login.values.password}
                    onChange={Login.handleChange}
                    className="mt-1"
                    type="password"
                    placeholder="***************"
                  />
                  {Login.errors.password && (
                    <div className={"errorBox"}>
                      <p className={"errorMsg"}>* {Login.errors.password} </p>
                    </div>
                  )}
                </Label>

                <Button type="submit" className="mt-4 " block>
                  Log in
                </Button>
              </form>

              <hr className="my-8" />
              {errorResponse ? (
                <div className={"errorResponse-box"}>
                  <p className={"errorResponse-alert"}>{errorResponse}</p>
                </div>
              ) : (
                ""
              )}
              {/* <Button block layout="outline">
                <GithubIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Github
              </Button>
              <Button className="mt-4" block layout="outline">
                <TwitterIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Twitter
              </Button> */}

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-orange-600 dark:text-orange-400 hover:underline"
                  to="/forgot-password"
                >
                  Forgot your password?
                </Link>
              </p>
              <p className="mt-1">
                <Link
                  className="text-sm font-medium text-orange-600 dark:text-orange-400 hover:underline"
                  to="/create-account"
                >
                  Create account
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
