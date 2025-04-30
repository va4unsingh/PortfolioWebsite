import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

// Force scroll to top on page refresh
window.onbeforeunload = function() {
  window.scrollTo(0, 0);
  // The return value is ignored in modern browsers
  return undefined;
};

// This will also scroll to top when the application initially loads
if (window.performance && 
    window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD) {
  // If it's a page refresh (not initial load), scroll to top
  window.scrollTo(0, 0);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);