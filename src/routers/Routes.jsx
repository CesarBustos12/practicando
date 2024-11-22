import MinimalLayout from "../layouts/MinimalLayout";
import React, { Children } from "react";
import Nosotros from "../sections/Nosotros";
import Contacto from "../sections/Contacto";
import Login from "../sections/Login";
import { LandingPage } from "../pages/LandingPage";

const Routes = {
    path: "/",
    element: <MinimalLayout />,
    children: [
        {path: "/", element: < LandingPage/>},
        {path: "/nosotros", element: <Nosotros />},
        {path: "/contacto", element: <Contacto />},
        {path: "/login", element: <Login />},
    ]
};

export default Routes;