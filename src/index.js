import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import { ItemsListProvider } from "./context/ItemsList";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ItemsListProvider>
      <App />
    </ItemsListProvider>
  </Provider>
);
