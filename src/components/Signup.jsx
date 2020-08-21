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
  const [checkEmail, setCheckEmail] = useState();
  const [emailErr, setEmailErr] = useState(false);
  const [signUp, setSignUp]= useState(false)
  const [userErr, setUserError]=useState(false)
  async function addUser(e) {
    
    const user = {
      username: username,
      email: email,
      password: password,
    };
    //! my change
    if (email !== checkEmail) {
      setEmailErr(true)
      return
    } else {
      //!-----------
      // console.log("!!!!", user);
      await axios.post("/users", user).then((res) => {
      })
      setEmailErr(false)
      setSignUp(true)
    }
    e.preventDefault();
  }
 


  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h4 text-center mb-4">Sign up</p>

            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
<<<<<<< HEAD
            <div>
              {userErr ?(<p className="">Check your mail</p>):(<br></br>)}
            </div>
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Your email
            </label>
=======
            <br />

>>>>>>> ed0c81de5ac571314159ccd5b1dfe994e8124bdf
            <input
              type="email"
              id="defaultFormRegisterEmailEx"
              className="form-control"
              placeholder="e-mail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            /> 
           
            <br />

            <input
              type="email"
              id="defaultFormRegisterConfirmEx"
              className="form-control"
              placeholder="confirm your email"
              //!my change
              onChange={(e) => {
                setCheckEmail(e.target.value);
              }}
            />
            <div>
              {emailErr ?(<p className="">Check your mail</p>):(<br></br>)}
            </div>
            
            <input
              type="password"
              id="defaultFormRegisterPasswordEx"
              className="form-control"
              placeholder="password"
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
              <div>
                {signUp? <p>You successfully Sign Up!</p>:<p></p>}
              </div>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Signup;
