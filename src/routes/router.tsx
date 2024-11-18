import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainPage from "../pages/MainPage";
import ServicesPage from "../pages/ServicesPage";
import { ProtectedRoute } from "./ProtectedRoute";

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
                <ServicesPage />
            </ProtectedRoute>
        ),
    },
    // {
    //     path: "*",
    //     element: <NotFoundPage />
    // },
])
 