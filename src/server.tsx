import * as express from "express";
import AdmittedEmail from "./components/AdmittedEmail";
import * as dotenv from "dotenv";
import * as React from "react";
import * as ReactDOMServer from "react-dom/server";
import * as sgMail from "@sendgrid/mail";
import ResetPasswordEmail from "./components/ResetPasswordEmail";
import NoUserResetEmail from "./components/NoUserResetEmail";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

const apiKey = process.env.SENDGRID_API_KEY;
if (apiKey) {
  sgMail.setApiKey(apiKey);
} else {
  throw Error("No API Key");
}

const SENDER_EMAIL = "noreply@hacknyu.org";

app.post("/admitted", (req, res) => {
  const body = ReactDOMServer.renderToStaticMarkup(
    <AdmittedEmail name={req.body.name} />
  );
  const msg = {
    to: "nick@nicholasyang.com",
    from: SENDER_EMAIL,
    subject: "You've Been Admitted",
    text: "Congratulations! You've been admitted",
    html: body
  };
  sgMail.send(msg).then(result => {
    res.send(result);
  });
});

app.post("/reset-password", (req, res) => {
  const body = ReactDOMServer.renderToStaticMarkup(
    <ResetPasswordEmail resetKey={req.body.resetKey} domain={req.body.domain} />
  );
  const msg = {
    to: "nick@nicholasyang.com",
    from: SENDER_EMAIL,
    subject: "Reset Your HackNYU Password",
    text: "Please click the link to reset your HackNYU password",
    html: body
  };
  sgMail.send(msg).then(result => {
    console.log(result);
    res.send(result);
  });
});

app.post("/no-user-reset", (req, res) => {
  const body = ReactDOMServer.renderToStaticMarkup(<NoUserResetEmail />);
  const msg = {
    to: "nick@nicholasyang.com",
    from: SENDER_EMAIL,
    subject: "Reset Your HackNYU Password",
    text: "We couldn't find any account corresponding to this email",
    html: body
  };
  sgMail.send(msg).then(result => {
    console.log(result);
    res.send(result);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
