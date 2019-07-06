import * as React from "react";

interface Props {
  resetKey: string;
  domain: string;
}

const ResetPasswordEmail: React.FunctionComponent<Props> = ({ resetKey, domain }) => {
  const resetUrl = `${domain}/reset-password/${resetKey}`;
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
                Forgot your password? Click 
                <a href={resetUrl}>here</a> to
                reset it.
                Or copy this link {resetUrl} into your address bar.
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

export default ResetPasswordEmail;
