import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import Endpoints from "../../api/Endpoints";

const LoginPage = () => {
  const [responseMessage, setResponseMessage] = useState({
    message: "",
    cssClass: "",
  });

  const [user, setUser] = useState({    
    email: "",
    password: "",
  });

  function onSubmitHandler(event) {
    event.preventDefault();
    axios
      .post(Endpoints.LOGIN_URL, user)
      .then(
        (response) => {
          console.log(response.data);

            localStorage.setItem('token', response.data.token)
            localStorage.setItem('user', JSON.stringify(response.data.user))

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
          <h2>Login</h2>
          <hr />

          {responseMessage.message && (
            <div class="alert alert-success" role="alert">
              {responseMessage.message}
            </div>
          )}

          <form onSubmit={onSubmitHandler}>          
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
              value="Login"
              className="btn btn-primary btn-block"
            />
            <br />
            <p>
              <a href="#">New User ? Click Here</a>
            </p>
          </form>
        </div>
      </div>
      <div className="col-lg-4"></div>
    </div>
  );
};
export default LoginPage;
