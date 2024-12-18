//Importaciones necesarias para nuestra pagina web
import MinimalLayout from "../layouts/MinimalLayout";
import React, { Children } from "react";
import Nosotros from "../sections/Nosotros";
import Contacto from "../sections/Contacto";
import Login from "../sections/Login";
import { LandingPage } from "../pages/LandingPage";
import { DesingPage } from "../pages/DesingPage";
import HomePage from "../pages/HomePage";
import { PaginaDiseño } from "../pages/PaginaDiseño";

const Routes = {
    path: "/",
    element: <MinimalLayout />,
    children: [
        {path: "/", element: < HomePage/>},
        {path: "/landingpage", element: <LandingPage/>},
        {path: "/nosotros", element: <Nosotros />},
        {path: "/contacto", element: <Contacto />},
        {path: "/login", element: <Login />},
        {path: "/desing", element: <DesingPage />},
        {path: "/pagina", element: <PaginaDiseño />},
    ]
};

export default Routes;