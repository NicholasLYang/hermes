import * as React from "react";

const NoUserResetEmail: React.FunctionComponent = () => {
  return (
    <div
      style={{
        fontFamily: "mr-eaves-xl-modern, Helvetica, sans-serif",
        maxWidth: "800px"
      }}
    >
      <style>@import url("https://use.typekit.net/hjh3sxe.css");</style>
      <table>
        <tbody>
        <tr>
          <div
            style={{
              padding: "10px",
              display: "flex",
              position: "relative",
              fontSize: "1.2em",
              height: "100px",
              // In case background image doesn't render
              backgroundColor: "#57068c",
              color: "white",
              backgroundSize: "contain",
              backgroundImage:
                "url('https://hacknyu.org/img/pattern-email.png')"
            }}
          >
            <div>
              <h1
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  paddingLeft: "15px"
                }}
              >
                Reset Password
              </h1>
            </div>
          </div>
        </tr>
        <tr>
          <div style={{ padding: "40px", fontSize: "1.1em" }}>
            <p>
              Sorry, we couldn't find any account corresponding to this
              email. If you registered in 2019, we no longer have those
              accounts in our system. Please register a new account.
            </p>
          </div>
        </tr>
        <tr>
          <th>
            <div style={{ paddingLeft: "40px" }}>
              <img
                style={{ maxWidth: "100px" }}
                alt="HackNYU Logo!"
                src="https://hacknyu.org/img/logo.png"
              />
              <p> Your friends at HackNYU </p>
            </div>
          </th>
        </tr>
        </tbody>
      </table>
      <p style={{ padding: "40px", paddingTop: "100px" }}>
        Copyright © HackNYU 2019
      </p>
    </div>
  );
};

export default NoUserResetEmail;
