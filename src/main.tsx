import "./main.scss";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { store } from "@app/services/store.ts";
import { Provider } from "react-redux";
import App from "@pages/App.tsx";
import Model from "./components/model/Model";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Suspense fallback={<Model type="loading" />}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>
  </Provider>
);
