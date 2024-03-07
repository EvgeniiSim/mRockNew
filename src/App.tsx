import {
   Route,
   RouterProvider,
   createBrowserRouter,
   createRoutesFromElements,
} from "react-router-dom";

import Cabinet from "./pages/Cabinet/Cabinet.tsx";
import CabinetProfile from "./pages/Cabinet/modules/CabinetProfile/CabinetProfile.tsx";
import CabinetChange from "./pages/Cabinet/modules/CabinetChange/CabinetChange.tsx";
import Home from "./pages/Home/Home.tsx";
import Reset from "./pages/Auth/modules/Reset/Reset.tsx";
import Login from "./pages/Auth/modules/Login/Login.tsx";
import Auth from "./pages/Auth/Auth.tsx";
import Reg from "./pages/Auth/modules/Reg/Reg.tsx";

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/">
         <Route index element={<Home />} />
         <Route path="cabinet" element={<Cabinet />}>
            <Route index element={<CabinetProfile />} />
            <Route path="change" element={<CabinetChange />} />
         </Route>
         <Route path="auth" element={<Auth />}>
            <Route path="reg" element={<Reg />} />
            <Route path="login" element={<Login />} />
            <Route path="reset" element={<Reset />} />
         </Route>
      </Route>
   )
);

function App() {
   return <RouterProvider router={router} />;
}

export default App;
