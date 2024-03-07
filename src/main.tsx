import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";

import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
   RouterProvider,
} from "react-router-dom";

import Cabinet from "./pages/Cabinet/Cabinet.tsx";
import CabinetProfile from "./pages/Cabinet/modules/CabinetProfile/CabinetProfile.tsx";
import CabinetChange from "./pages/Cabinet/modules/CabinetChange/CabinetChange.tsx";

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<App />}>
         <Route path="cabinet" element={<Cabinet />}>
            <Route index element={<CabinetProfile />} />
            <Route path="change" element={<CabinetChange />} />
         </Route>
      </Route>
   ),
   {
      basename: "/mRockNew",
   }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
