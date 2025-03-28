import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "@/pages/home/Home";
import SignPortal from "./pages/sign-portal/SignPortal";
import { SignPortalProvider } from "./context/SignPortalContext";
import Dashboard from "./pages/dashboard/Dashboard";

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
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
