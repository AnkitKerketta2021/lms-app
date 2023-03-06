import { Container, FormControl, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import LoginButton from "../atom/LoginButton";
import "./LoginForm.css";
import logo from '../../static/images/Artboard – 2@2x.png'
import { Link } from "react-router-dom";

const LoginForm = () => {
  const Header = styled.h3`
    text-align: center;
    color: #ffaa17;
    font-weight: 700;
  `;
  const Logo = styled.h3`
    text-align: center;
    color: #ffaa17;
    font-weight: 700;
  `;
  const btn_onClick = () => {};
  return (
    <Container>
      <Logo id="form_logo">
        <img style={{width:'244px',height:'91px', margin:'75px 0'}} src={logo} alt="Logo" />
      </Logo>
      <Header id="form_header">Login</Header>
      <FormControl id="adminLoginForm" className="ms-3">
        <label id="loginformLabel1">Employee ID</label>
        <input
          id="loginInputId"
          style={{
            border: "none",
            borderRadius: "0.25em",
            padding: "0.3em",
            width: "13.5em",
          }}
          className="m-auto"
          placeholder=""
        />
        <label id="loginformLabel2">Password</label>
        <input
          id="loginInputPass"
          style={{
            border: "none",
            borderRadius: "0.25em",
            padding: "0.3em",
            width: "13.5em",
          }}
          className="m-auto"
          placeholder="Enter Password"
        />
        <div className="mt-3" style={{background:'#FAA81D',borderRadius:'5px',padding:'1px'}}>
        <Grid container spacing={2}>
      <Grid item xs={6}>
       <Link to="/batch"> <LoginButton custom_style={{background:'#FFAA17', border:'#777777',paddingLeft:'2.5em', fontSize:'12px',fontWeight:600}} btn_Value={"LOGIN"} btn_onClick={btn_onClick} /></Link>
      </Grid>
      <Grid item xs={6}>
        <LoginButton custom_style={{paddingLeft:'27px',paddingRight:'27px', fontSize:'12px',fontWeight:600}} btn_Value={"CANCEL"} btn_onClick={btn_onClick} />
      </Grid>
      </Grid>
        </div>
      </FormControl>
        <footer style={{color:'#fff',opacity:'0.6',fontSize:'0.49em',zIndex:1000,width:'250px',position:'relative', bottom:'-100px'}}>
        <hr style={{opacity:1}}/>
        <p>Copyright © 2018 Aleercio.com &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Terms & Conditions | Privacy policy</p>
      </footer>
    </Container>
  );
};

export default LoginForm;
