import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/navbar";
import menu from "./menu";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NavBar menu={menu} />
  </React.StrictMode>
);
