import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "@/pages/home/Home";
import SignPortal from "./pages/sign-portal/portal/SignPortal";
import { SignPortalProvider } from "./context/SignPortalContext";
import Dashboard from "./pages/dashboard/Dashboard";
import Inventory from "./pages/dashboard/inventory/Inventory";
import Sales from "./pages/dashboard/sales/Sales";
import SignUpPage from "./pages/sign-portal/portal/SignUpPage";
import ConfigForm from "./pages/sign-portal/configuration/ConfigForm";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-portal",
        element: (
          <SignPortalProvider>
            <SignUpPage />
          </SignPortalProvider>
        ),
        children: [
          {
            path: "/sign-portal",
            element: <SignPortal />,
          },
          {
            path: "config",
            element: <ConfigForm />,
          },
        ],
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "inventory",
            element: <Inventory />,
          },
          {
            path: "sales",
            element: <Sales />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
