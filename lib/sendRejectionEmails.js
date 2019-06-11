"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
const sgMail = require("@sendgrid/mail");
const index_1 = require("./index");
const RejectedEmail_1 = require("./RejectedEmail");
// invoked manually; add API_KEY to env with your key
exports.sendRejectionEmail = () => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const db = admin.firestore();
  const auth = admin.auth();
  const messages = [];
  return index_1
    .getRejectedUsersData()
    .then(rejectedUsersData => {
      let emails = Object.entries(rejectedUsersData)
        .map(([uid, data]) => data.email)
        .filter(email => !!email);
      const msg = {
        to: emails,
        from: "confirm@hacknyu.org",
        subject: "Update on Your Admission Status",
        text: "Update on your HackNYU Admission status",
        html: RejectedEmail_1.default("")
      };
      return sgMail.send(msg, true);
    })
    .then(() => console.log("SENT"))
    .catch(err => console.error(err.response.body));
};
exports.sendRejectionEmail();
//# sourceMappingURL=sendRejectionEmails.js.map
