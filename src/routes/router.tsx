import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainPage from "../pages/MainPage";
import ListServicePage from "../pages/ListServicesPage";
import ArrangementPage from "../pages/ArrangementPage"
import { ProtectedRoute } from "./ProtectedRoute";
import ServicePage from "../pages/ServicePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/auth/login" replace />,
    },
    {
        path: "auth",
        children: [
            {
                path: "login",
                element: <Login />, 
            },
            {
                path: "register",
                element: <Register />, 
            },
        ],
    },
    {
        path: "main",
        element: (
            <ProtectedRoute>
                <MainPage />
            </ProtectedRoute>
        ),

    },
    {
        path: "services",
        element: (
            <ProtectedRoute>
                <ListServicePage />
            </ProtectedRoute>
        ),
    },
    {
        path: "service/:idService", // Ruta dinámica
        element: (
            <ProtectedRoute>
                <ServicePage/>
            </ProtectedRoute>
        ),
    },
    {
        path: "service/:idService/arrangement", // Ruta dinámica
        element: (
            <ProtectedRoute>
                <ArrangementPage />
            </ProtectedRoute>
        ),
    }
    // {
    //     path: "*",
    //     element: <NotFoundPage />
    // },
])
 