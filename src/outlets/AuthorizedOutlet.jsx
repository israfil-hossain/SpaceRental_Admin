import React, { Suspense } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { CommonProgress } from "../components/common/CommonProgress";
import { useAuthUserContext } from "../context/AuthUserProvider";

const AuthorizedOutlet = () => {
  const { userFound } = useAuthUserContext();
  const { pathname } = useLocation();

  if (!userFound) {
    return <Navigate to={"/login"} state={{ authSuccessRedirect: pathname }} />;
  }

  return (
    <div>
      <Suspense fallback={<CommonProgress />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default AuthorizedOutlet;
