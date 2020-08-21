import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const Login = ({setNumState}) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const loginName = useSelector((state)=>state.loginName)



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

  // async function getUsername(){
  //   const username = {loginName : loginName};
  //   await axios.post("/", post);
  // }

  function login(){
    dispatch({
      type : "SHOW_LOGIN_NAME",
      loginName: username 
    })
  }


  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="text-center">Sign in</p>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              placeholder="username"
              onChange = {(e)=>{setUsername(e.target.value)}}
              //onChange={(e) => setUsername(e.target.value)}
            />  
            <br />
            <input
              type="password"
              id="defaultFormLoginPasswordEx"
              className="form-control"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="text-center mt-4">
              <MDBBtn color="indigo" onClick={()=> {
                login();
                setNumState(0);
                }}>
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
