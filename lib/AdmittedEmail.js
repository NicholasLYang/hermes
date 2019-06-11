"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReactDOMServer = require("react-dom/server");
const React = require("react");
const render = (name) => {
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
                            fontSize: "1.3em",
                            height: "100px",
                            // In case background image doesn't render
                            backgroundColor: "#57068c",
                            color: "white",
                            backgroundSize: "contain",
                            backgroundImage: "url('https://hacknyu.org/img/pattern-email.png')"
                        } },
                        React.createElement("div", { style: {
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%, -50%)"
                            } },
                            React.createElement("h1", { style: { paddingLeft: "15px" } }, " You're In! \uD83C\uDF89\uD83C\uDF89\uD83C\uDF89 ")))),
                React.createElement("tr", null,
                    React.createElement("div", { style: { padding: "40px", fontSize: "1.1em" } },
                        React.createElement("p", null,
                            "Congrats",
                            name ? ` ${name}` : "",
                            "! You've been accepted to HackNYU 2019. Please",
                            " ",
                            React.createElement("a", { href: "https://hacknyu.org/status" }, "confirm your acceptance"),
                            " ",
                            "by January 30th."),
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
//# sourceMappingURL=AdmittedEmail.js.map