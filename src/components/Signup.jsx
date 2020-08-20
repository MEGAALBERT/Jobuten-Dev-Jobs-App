import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from "axios";

const Signup = () => {
  const [fields, handleFieldChange] = useState();
  const [newUser, setNewUser] = useState(null);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  //!　my change
  const [checkEmail, setCheckEmail]= useState()
  

  async function addUser(e) {
    console.log(email,checkEmail)
    const user = {
      username: username,
      email: email,
      password: password,
    };
    //! my change
    if (email !== checkEmail) {
      console.log("wrong email")
      return
    }
      //!-----------

      console.log("!!!!", user);
      await axios.post("/users", user);
      e.preventDefault();
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h4 text-center mb-4">Sign up</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Your username
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="defaultFormRegisterEmailEx"
              className="form-control"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
              Confirm your email
            </label>
            <input
              type="email"
              id="defaultFormRegisterConfirmEx"
              className="form-control"
              //!my change
              onChange={(e) => {
                setCheckEmail(e.target.value);
              }}
            />
            <br />
            <label
              htmlFor="defaultFormRegisterPasswordEx"
              className="grey-text"
            >
              Your password
            </label>
            <input
              type="password"
              id="defaultFormRegisterPasswordEx"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="text-center mt-4">
              <MDBBtn
                color="unique"
                //!=---------
                // type="submit"
                // value="POST"
                //!------------
                onClick={addUser}
              >
                Register
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Signup;
