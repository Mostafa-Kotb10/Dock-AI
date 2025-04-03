import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "@/pages/home/Home";
import SignPortal from "./pages/sign-portal/SignPortal";
import { SignPortalProvider } from "./context/SignPortalContext";
import Dashboard from "./pages/dashboard/Dashboard";
import Inventory from "./pages/dashboard/Inventory";
import Sales from "./pages/dashboard/Sales";
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
            <SignPortal />
          </SignPortalProvider>
        ),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
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
