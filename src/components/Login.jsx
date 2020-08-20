import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  async function addUser(e) {
    const user = {
      username: username,
      password: password,
    };
    console.log("!!!!", user);
    await axios.post("/login", user).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    e.preventDefault();
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h4 text-center mb-4">Sign in</p>
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Your username
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
              Your password
            </label>
            <input
              type="password"
              id="defaultFormLoginPasswordEx"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="text-center mt-4">
              <MDBBtn color="indigo" onClick={addUser}>
                Login
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
