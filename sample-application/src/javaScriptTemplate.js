import { createRoot } from "react-dom/client";
import React from "react";

// Bootstrap your React Application.
// JavaScript Expressions

// createRoot(document.getElementById("root"))
//     .render(React.createElement("h1", null, "This is not JSX Component...."))

// <h1>This is not JSX Component</h1>

/* <div>
    <b>Hello</b>
    <p>All</p>
</div> */

// createRoot(document.getElementById("root"))
//     .render(React.createElement("div", null, [
//         React.createElement("b", null, "Hello"),
//         React.createElement("p", null, "All")
//     ]))

/* <div>
    <b>Hello</b>
    <div>
        <p>This is Para</p>
        <div>
            <section>Sample</section>
        </div>
    </div>
</div> */

createRoot(document.getElementById("root"))
        .render(React.createElement("div", null, [
            React.createElement("b", null, "Hello"),
            React.createElement("div", null, [
		        React.createElement("p", null, "This is Para"),
		        React.createElement("div", null, [
			        React.createElement("section", null, "Sample")
		        ])
	        ])
        ]
    )
)    