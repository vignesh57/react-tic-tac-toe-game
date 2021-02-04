import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Game from "./components/game";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Game />,
  </StrictMode>,
  rootElement
);
