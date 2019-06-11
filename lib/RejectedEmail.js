"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReactDOMServer = require("react-dom/server");
const React = require("react");
const renderRejectedEmail = (name) => {
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
                            minHeight: "100px",
                            backgroundColor: "#57068c",
                            color: "white",
                            backgroundSize: "contain",
                            textAlign: "center",
                            backgroundImage: "url('https://hacknyu.org/img/pattern-email.png')"
                        } },
                        React.createElement("h1", { style: { paddingLeft: "10%" } }, "Thank You for Your Application"))),
                React.createElement("tr", null,
                    React.createElement("div", { style: { padding: "40px", fontSize: "1.1em" } },
                        React.createElement("p", null,
                            name ? ` Dear ${name}` : "Hello",
                            ","),
                        React.createElement("p", null, "Thank you for submitting your application to HackNYU."),
                        React.createElement("p", null, "We regret to inform you that, due to limited capacity, we are not able to take any more participants for HackNYU 2019."),
                        React.createElement("p", null, "This year, we received over 2000 applications (our most ever) making us the largest university hackathon in New York!"),
                        React.createElement("p", null,
                            "You can check up on HackNYU 2019 from our twitter feed",
                            " ",
                            React.createElement("a", { href: "https://twitter.com/hacknyu" }, "here"),
                            "."),
                        React.createElement("p", null, "We hope to see you next year!"),
                        React.createElement("p", null, "All the best,"))),
                React.createElement("tr", null,
                    React.createElement("th", null,
                        React.createElement("div", { style: { paddingLeft: "40px" } },
                            React.createElement("img", { style: { maxWidth: "100px" }, alt: "HackNYU Logo!", src: "https://hacknyu.org/img/logo.png" }),
                            React.createElement("p", null, " Your friends at HackNYU ")))))),
        React.createElement("p", { style: { padding: "40px", paddingTop: "100px" } }, "Copyright \u00A9 HackNYU 2019")));
    return body;
};
exports.default = renderRejectedEmail;
//# sourceMappingURL=RejectedEmail.js.map