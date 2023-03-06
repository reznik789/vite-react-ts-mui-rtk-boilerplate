import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import { initToken } from "src/app/features/user/userSlice";

const container = document.getElementById("root")!;
const root = createRoot(container);
const token = localStorage.getItem("access_token") ?? null;
token && store.dispatch(initToken(token));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
