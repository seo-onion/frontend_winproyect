// src/main.tsx

import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import {router} from "./routes/router";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthProvider>
      <RouterProvider
        router={router}
      />
    </AuthProvider>
);
