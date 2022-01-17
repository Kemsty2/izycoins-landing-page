require("./bootstrap");

import { createInertiaApp } from "@inertiajs/inertia-react";
import React from "react";
import { render } from "react-dom";
import { Toaster } from "react-hot-toast";
import { InertiaProgress } from "@inertiajs/progress";
import { ThemeProvider } from "./components/ThemeContext";
import Modal from "react-modal";
import "react-phone-number-input/style.css";
import "ldbutton/dist/ldbtn.min.css";

createInertiaApp({
  resolve: (name) => require(`./Pages/${name}`),
  setup({ el, App, props }) {
    Modal.setAppElement(el);
    render(
      <ThemeProvider>
        <App {...props} />
        <Toaster />
      </ThemeProvider>,
      el
    );
  },
});

InertiaProgress.init({ color: "#4B5563" });
