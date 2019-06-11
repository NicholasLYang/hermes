"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const ReminderEmail_1 = require("./ReminderEmail");
const AdmittedEmail_1 = require("./AdmittedEmail");
const RejectedEmail_1 = require("./RejectedEmail");
const index_1 = require("./index");
const app = express();
const port = 3000;
app.get("/admitted", (req, res) => res.send(AdmittedEmail_1.default("Nicholas")));
app.get("/rejected", (req, res) => res.send(RejectedEmail_1.default("")));
app.get("/rejected-users", (req, res) => {
    index_1.getRejectedUsersData().then(rejected => res.json(rejected));
});
app.get("/reminder", (req, res) => res.send(ReminderEmail_1.default()));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//# sourceMappingURL=server.js.map