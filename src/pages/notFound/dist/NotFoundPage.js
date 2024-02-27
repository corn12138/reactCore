"use strict";
exports.__esModule = true;
// 在src/pages/notFound/NotFoundPage.tsx
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var NotFoundPage = function () {
    return (react_1["default"].createElement("main", { className: "flex items-center justify-center h-screen bg-gray-100" },
        react_1["default"].createElement("div", { className: "max-w-md w-full space-y-8" },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: "mx-auto h-12 w-auto" },
                    react_1["default"].createElement("circle", { cx: "12", cy: "12", r: "4" }),
                    react_1["default"].createElement("path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" })),
                react_1["default"].createElement("h2", { className: "mt-6 text-center text-3xl font-extrabold text-gray-900" }, "404 - Page Not Found"),
                react_1["default"].createElement("p", { className: "mt-2 text-center text-sm text-gray-600" }, "The page you are looking for does not exist. It might have been moved or deleted.")),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(react_router_dom_1.Link, { to: "/login" },
                    react_1["default"].createElement("button", { className: "ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10" }, "\u8FD4\u56DE\u767B\u5F55\u9875\u9762"))))));
};
exports["default"] = NotFoundPage;
