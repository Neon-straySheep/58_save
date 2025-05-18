import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

import { BrowserRouter, Route, Routes } from "react-router";
import { Mypost } from "./Mypost.jsx";
import { Form } from "./Form.jsx";
import { Recent } from "./Recent.jsx";
import { UserProvider } from "./provider/UserContext.jsx";
import { PostProvider } from "./provider/PostContext.jsx";
import { GoodProvider } from "./provider/Good.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <UserProvider>
          <GoodProvider>
            <RouterProvider router={router} />
          </GoodProvider>
      </UserProvider>
    </AuthContextProvider>
  </StrictMode>
);
{
  /* <UserProvider>
<PostProvider>
  <GoodProvider>

  </GoodProvider>
</PostProvider>
</UserProvider> */
}
