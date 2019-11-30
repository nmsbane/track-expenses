import React from "react";
import ReactDOM from "react-dom";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

// react differentiates between normal html and react component using uppercase letter
import AppRouter from "./routers/AppRouter";

ReactDOM.render(<AppRouter />, document.getElementById("app"));
