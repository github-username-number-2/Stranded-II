import PageData from "/js/data/PageData.js";

window.query = query => document.querySelector(query);

window.body = query("body");
window.canvas = query("#canvas-main");
window.ctx = canvas.getContext("2d");

canvas.width = PageData.canvasDrawWidth;
canvas.height = PageData.canvasDrawHeight;

canvas.style.width = PageData.canvasAbsoluteWidth + "px";
canvas.style.height = PageData.canvasAbsoluteHeight + "px";

const script = document.createElement("script");
script.src = "js/startup/main.js";
script.setAttribute("type", "module");
body.appendChild(script);