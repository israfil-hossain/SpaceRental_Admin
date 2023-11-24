import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import { CommonProgress } from "./components/common/CommonProgress";
import ProtectedRoute from "./components/protected/ProtectedRoute";

const Users = lazy(() => import("./page/Users"));
const Profile = lazy(()=> import("./page/Profile"));
const Dashboard = lazy(() => import("./page/Dashboard"));
const Support = lazy(() => import("./page/Support"));

const Signin = lazy(() => import("./page/Signin"));

const Stores = lazy(() => import("./page/Stores"));
const Earnings = lazy(() => import("./page/Earnings"));
const ControlPanel = lazy(() => import("./page/ControlPanel"));

const TermsCondition = lazy(() => import("./page/TermsCondition"));
const AboutUs = lazy(() => import("./page/AboutUs"));
const ViewResult = lazy(() => import("./page/ViewResult"));
const AllStudy = lazy(() => import("./page/AllStudy"));
const Signup = lazy(() => import("./page/Signup"));
const ForgotPassword = lazy(() => import("./page/ForgotPassword"));
const ResetPassword = lazy(() => import("./page/ResetPassword"));

const App = () => {
  return (
    <Routes>
      {/* Dashboard */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Suspense fallback={<CommonProgress />}>
              <Dashboard />
            </Suspense>
          </MainLayout>
        }
      />

      <Route
        path="/login"
        element={
          <MainLayout>
            <Suspense fallback={<CommonProgress />}>
              <Signin />
            </Suspense>
          </MainLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <MainLayout>
            <Suspense fallback={<CommonProgress />}>
              <Signup />
            </Suspense>
          </MainLayout>
        }
      />

      {/* Study */}
      <Route
        path="/earnings"
        element={
          <MainLayout>
            <Suspense fallback={<CommonProgress />}>
              <Earnings />
            </Suspense>
          </MainLayout>
        }
      />
      {/* <Route
        path="/allstudy/study/:id"
        element={
          <MainLayout>
            <Suspense fallback={<CommonProgress />}>
              <Study />
            </Suspense>
          </MainLayout>
        }
      /> */}

      {/* ControlPanel */}
      <Route
        path="/control-panel"
        element={
          <MainLayout>
            <Suspense fallback={<CommonProgress />}>
              <ControlPanel />
            </Suspense>
          </MainLayout>
        }
      />
      {/* <Route
        path="/category/quiz"
        element={
          <MainLayout>
            <Suspense fallback={<CommonProgress />}>
              <Quiz />
            </Suspense>
          </MainLayout>
        }
      /> */}

      {/* Stores */}
      <Route
        path="/stores"
        element={
          <MainLayout>
            <Suspense fallback={<CommonProgress />}>
              <Stores />
            </Suspense>
          </MainLayout>
        }
      />
      {/* <Route
        path="/allquiz/quiz"
        element={
          <MainLayout>
            <Suspense fallback={<CommonProgress />}>
              <Quiz />
            </Suspense>
          </MainLayout>
        }
      /> */}

      {/* Questions */}
      {/* <Route
        path="/questions"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Suspense fallback={<CommonProgress />}>
                <Questions />
              </Suspense>
            </MainLayout>
          </ProtectedRoute>
        }
      /> */}

      {/* Support */}
      <Route
        path="/support"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Suspense fallback={<CommonProgress />}>
                <Support />
              </Suspense>
            </MainLayout>
          </ProtectedRoute>
        }
      />
      {/* <Route
        path="/results/viewresults/:id"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Suspense fallback={<CommonProgress />}>
                <ViewResult />
              </Suspense>
            </MainLayout>
          </ProtectedRoute>
        }
      /> */}
      {/* Profile  */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Suspense fallback={<CommonProgress />}>
                <Profile />
              </Suspense>
            </MainLayout>
          </ProtectedRoute>
        }
      />

      {/* Users */}
      <Route
        path="/users"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Suspense fallback={<CommonProgress />}>
                <Users />
              </Suspense>
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/users/edit"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Suspense fallback={<CommonProgress />}>
                <Users />
              </Suspense>
            </MainLayout>
          </ProtectedRoute>
        }
      />

      {/* Quiz */}
      <Route
        path="/terms"
        element={
          <MainLayout>
            <Suspense fallback={<CommonProgress />}>
              <TermsCondition />
            </Suspense>
          </MainLayout>
        }
      />
      <Route
        path="/aboutus"
        element={
          <MainLayout>
            <Suspense fallback={<CommonProgress />}>
              <AboutUs />
            </Suspense>
          </MainLayout>
        }
      />

      // ForgotPassword & Reset Password 
      <Route
        path="/forgotpassword"
        element={
          <MainLayout>
            <Suspense fallback={<CommonProgress />}>
             <ForgotPassword />
            </Suspense>
          </MainLayout>
        }
      />
      <Route
        path="/reset-password/:token"
        element={
          <MainLayout>
            <Suspense fallback={<CommonProgress />}>
             <ResetPassword />
            </Suspense>
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default App;
