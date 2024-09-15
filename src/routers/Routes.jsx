import MinimalLayout from "../layouts/MinimalLayout";
import { useRoutes } from "react-router-dom";
import React, { Children } from "react";
import HomePage from "../pages/HomePage";

const Routes = {
    path: "/",
    element: <MinimalLayout />,
    children: [
        {path: "/", element: < HomePage/>},
    ]
};

export default Routes;