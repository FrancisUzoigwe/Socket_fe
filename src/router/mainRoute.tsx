import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import RegisterScreen from "../pages/auth/RegisterScreen";
import SigninScreen from "../pages/auth/SigninScreen";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Chat from "../pages/home/Chat";
import PrivateRoute from "./PrivateRoute";


export const mainRoute = createBrowserRouter([
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <RegisterScreen />
            },
            {
                path: "/auth/signin",
                element: <SigninScreen />
            }
        ]
    },
    {
        path: "/",
        element: <PrivateRoute>
            <MainLayout />
        </PrivateRoute>,
        children: [
            {
                index: true,
                element: <Home />,
            }, {
                path: "/chat",
                element: <Chat />
            }
        ]
    }
])