import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store from "./store/store.ts";
import "./styles/index.css";
import App from "./App.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store.store}>
    <PersistGate persistor={store.persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
