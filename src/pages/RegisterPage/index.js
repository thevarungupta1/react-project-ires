import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import Endpoints from "../../api/Endpoints";

const RegisterPage = () => {
  const [responseMessage, setResponseMessage] = useState({
    message: "",
    cssClass: "",
  });

  const [user, setUser] = useState({
    firstName: "",
    email: "",
    mobile: "",
    password: "",
  });

  function onSubmitHandler(event) {
    event.preventDefault();
    axios
      .post(Endpoints.REGISTER_URL, user)
      .then(
        (response) => {
          console.log(response.data);
          setResponseMessage({
            message: response.data.message,
            cssClasas: "alert-success",
          });
        },
        (error) => {
          console.log(error);
          setResponseMessage({
            message: error.response.data.message,
            cssClasas: "alert-danger",
          });
        }
      )
      .catch((error) => {
        console.log(error);
      });
  }

  function onChangeHandler(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="row">
      <div className="col-lg-4"></div>
      <div className="col-lg-4">
        <div className="wrapper">
          <h2>Register</h2>
          <hr />

          {responseMessage.message && (
            <div class="alert alert-success" role="alert">
              {responseMessage.message}
            </div>
          )}

          <form onSubmit={onSubmitHandler}>
            <div className="form-group">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={onChangeHandler}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={onChangeHandler}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Mobile</label>
              <input
                type="text"
                name="mobile"
                value={user.mobile}
                onChange={onChangeHandler}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={onChangeHandler}
                className="form-control"
              />
            </div>
            <input
              type="submit"
              value="Register"
              className="btn btn-primary btn-block"
            />
            <br />
            <p>
              <a href="#">Already register ? Click Here</a>
            </p>
          </form>
        </div>
      </div>
      <div className="col-lg-4"></div>
    </div>
  );
};
export default RegisterPage;
