import { createRoot } from "react-dom/client";

// Bootstrap your React Application.
createRoot(document.getElementById("root"))
    .render(<h1>This is the Root Application</h1>)

createRoot(document.getElementsByClassName("other_div")[1])
    .render(<h1>This is the Root Application</h1>)

createRoot(document.getElementsByClassName("other_div")[0])
    .render(<h1>This is the Other Root Application</h1>)
