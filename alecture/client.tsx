import App from "@layouts/App";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import {render} from "react-dom";

render(<BrowserRouter><App /></BrowserRouter>, document.querySelector('#app'));