import MinimalLayout from "../layouts/MinimalLayout";
import React, { Children } from "react";
import HomePage from "../pages/HomePage";
import Nosotros from "../sections/Nosotros";
import Contacto from "../sections/Contacto";
import Login from "../sections/Login";
import UploadFile from "../sections/UploadFile";
import { LandingPage } from "../pages/LandingPage";

const Routes = {
    path: "/",
    element: <MinimalLayout />,
    children: [
        {path: "/", element: < LandingPage/>},
        {path: "/nosotros", element: <Nosotros />},
        {path: "/contacto", element: <Contacto />},
        {path: "/login", element: <Login />},
        {path: "/subir", element: <UploadFile />}
    ]
};

export default Routes;