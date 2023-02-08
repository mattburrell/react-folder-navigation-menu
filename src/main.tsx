import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./NavBar";
import "normalize.css/normalize.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>
);
