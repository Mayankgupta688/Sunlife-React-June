import { createRoot } from "react-dom/client";
import { App } from "./components/App.js";

var app = createRoot(document.getElementById("root"))
setInterval(function() {
    app.render(<App></App>)
}, 1000);


