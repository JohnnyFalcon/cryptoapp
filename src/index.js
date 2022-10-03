import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";
import { NavigationProvider } from "./components/contexts/NavigationContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <NavigationProvider>
          <App />
        </NavigationProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);
