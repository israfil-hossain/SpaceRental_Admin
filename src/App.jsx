import React, { lazy } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppOutlet from "./outlets/AppOutlet";
import AuthorizedOutlet from "./outlets/AuthorizedOutlet";
import UnauthorizedOutlet from "./outlets/UnauthorizedOutlet";


const Users = lazy(() => import("./page/Users"));
const Profile = lazy(() => import("./page/Profile"));
const Dashboard = lazy(() => import("./page/Dashboard"));
const Support = lazy(() => import("./page/Support"));

const Signin = lazy(() => import("./page/Signin"));

const Stores = lazy(() => import("./page/Stores"));
const SingleStore = lazy(() => import("./page/SingleStore"));

const Earnings = lazy(() => import("./page/Earnings"));
const Transport = lazy(() => import("./page/Transport"));

const ControlPanel = lazy(() => import("./page/Controlpanel/ControlPanel"));
const Security = lazy(() => import("./page/Controlpanel/security"));
const AccessMethod = lazy(() => import("./page/Controlpanel/accessmethod"));
const StorageCondition = lazy(() => import("./page/Controlpanel/storage-conditions"));
const UnloadMoving = lazy(() => import("./page/Controlpanel/unload-moving"));
const Schedule = lazy(() => import("./page/Controlpanel/schedule"));



const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppOutlet />,
      children: [
        //auth
        {
          path: "login",
          element: <UnauthorizedOutlet />,
          children: [
            {
              path: "",
              element: <Signin />,
            },
            {
              path: "*",
              element: <Navigate to={"/login"} />,
            },
          ],
        },

        // main layout
        {
          path: "",
          element: <AuthorizedOutlet />,
          children: [
            {
              path: "",
              element: <Dashboard />,
            },
            {
              path: "stores",
              element: <Stores />,
            },
            {
              path: "stores/:id",
              element: <SingleStore />,
            },
            {
              path: "users",
              element: <Users />,
            },
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "earnings",
              element: <Earnings />,
            },

            //Control Panel .... 
            {
              path: "control-panel",
              element: <ControlPanel />,
            },
            {
              path: "security",
              element: <Security />,
            },
            {
              path: "access-method",
              element: <AccessMethod />,
            },
            {
              path: "storage-condition",
              element: <StorageCondition />,
            },
            {
              path: "unload-move",
              element: <UnloadMoving />,
            },
            {
              path: "schedule",
              element: <Schedule />,
            },
            
           
            {
              path: "support",
              element: <Support />,
            },
            {
              path: "transport",
              element: <Transport />,
            },
            {
              path: "*",
              element: <Navigate to={"/"} />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
