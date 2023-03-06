import React from "react";
import "./LoginPage.css";
import cardBgImage from "../../../static/images/wepik-2022319-214333-1.png";
import { Card, Grid } from "@mui/material";
import LoginForm from "../../forms/LoginForm";

const LoginPage = () => {
  // const btn_onClick = () => {};
  return (
    <div className="loginContainer" style={{ zIndex: 100 }}>
      <div id="loginBackground">
        <div className="loginCard">
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <img
                style={{ width: "930px" }}
                src={cardBgImage}
                alt="CardBgImage"
              />
              <span>Good things on your way!</span>
            </Grid>
            <Grid className="m-auto" item xs={4}>
              <Card
                style={{
                  background: "#555",
                  height: "620px",
                  borderRadius: "0 10px 10px 0",
                }}
              >
                <Grid style={{ position: "absolute", top: "60px" }}>
                  <LoginForm />
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
