import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { useStateContext } from '../contexts/ContextProvider';
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [username, setUsername] = useState("");

  const { setLoggedInUser } = useStateContext();

  const textFieldStyle = { width: "100%", maxWidth: "400px", marginBottom: "10px" }

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("USER Logged In",{status:"Success"});
    navigate("/users");

  }

  return (
    <form
      style={{ textAlign: "center", marginTop: "20vh" }}
      onSubmit={(e) => handleSubmit(e)}
    >
      <div style={{maxWidth:"400px", width:"100%", margin:"auto", padding:"40px"}}>
      <Typography variant="h4" style={{ margin: "10px auto" }}> 
          WELCOME VISITOR
      </Typography>
      <p>Please enter your details below to login</p>
      <br></br>
      <TextField
        style={textFieldStyle}
        variant="outlined"
        placeholder="Enter Any Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br></br>
      <br></br>
      <TextField
        style={textFieldStyle}
        variant="outlined"
        placeholder="Enter Any Password"
        type="password"
      />
      <br></br>
      <br></br>
        <Button
          variant="contained"
          type="submit"
          size="large"
          color="secondary"
          fullWidth
          onClick={() => setLoggedInUser({ user: username })}
        >
          Login
        </Button>
      </div>
    </form>
  );
};

export default Login;
