"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReactDOMServer = require("react-dom/server");
const React = require("react");
const render = () => {
    const body = ReactDOMServer.renderToString(React.createElement("div", { style: {
            fontFamily: "mr-eaves-xl-modern, Helvetica, sans-serif",
            maxWidth: "800px"
        } },
        React.createElement("style", null, "@import url(\"https://use.typekit.net/hjh3sxe.css\");"),
        React.createElement("table", null,
            React.createElement("tbody", null,
                React.createElement("tr", null,
                    React.createElement("div", { style: {
                            padding: "10px",
                            display: "flex",
                            position: "relative",
                            fontSize: "1.2em",
                            height: "100px",
                            // In case background image doesn't render
                            backgroundColor: "#57068c",
                            color: "white",
                            backgroundSize: "contain",
                            backgroundImage: "url('https://hacknyu.org/img/pattern-email.png')"
                        } },
                        React.createElement("div", null,
                            React.createElement("h1", { style: {
                                    position: "absolute",
                                    left: "50%",
                                    top: "50%",
                                    transform: "translate(-50%, -50%)",
                                    paddingLeft: "15px"
                                } }, "Confirmation Closing Soon!")))),
                React.createElement("tr", null,
                    React.createElement("div", { style: { padding: "40px", fontSize: "1.1em" } },
                        React.createElement("p", null, "Wow! We're stunned by the sheer volume of applications that we've received. Over 2000 people applied, setting a new record for HackNYU."),
                        React.createElement("p", null, "If you haven't already, please confirm your spot at HackNYU! We will be closing the form in 24 hours, and you will be unable to confirm that you are coming after that time. If you can no longer make the event, please update your status on the confirmation form."),
                        React.createElement("p", null, "By informing us that you cannot attend HackNYU, you help us out so we can make room for more people who want to come. We are reaching our capacity for the event, and we want to make sure everyone who wants to come has a chance!"),
                        React.createElement("p", null, "HackNYU 2019 is from February 15th to the 17th. It takes place simultaneously in New York, Shanghai and Abu Dhabi over 48 hours. It is completely free, thanks to our wonderful sponsors and volunteers."),
                        React.createElement("p", null, "We hope to see you there!"))),
                React.createElement("tr", null,
                    React.createElement("th", null,
                        React.createElement("div", { style: { paddingLeft: "40px" } },
                            React.createElement("img", { style: { maxWidth: "100px" }, alt: "HackNYU Logo!", src: "https://hacknyu.org/img/logo.png" }),
                            React.createElement("p", null, " Your friends at HackNYU ")))))),
        React.createElement("p", { style: { padding: "40px", paddingTop: "100px" } }, "Copyright \u00A9 HackNYU 2019")));
    return body;
};
exports.default = render;
//# sourceMappingURL=ReminderEmail.js.map