import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "src/app/hooks";
import { selectToken } from "src/app/features/user/userSlice";
import { Box } from "@mui/material";
import { MainLayout } from "src/components/MainLayout/MainLayout";

const AuthOnlyRoutes: React.FC = () => {
  const token = useAppSelector(selectToken);
  return token ? (
    <MainLayout>
      <Box sx={{ m: 3 }}></Box>
      <Outlet />
    </MainLayout>
  ) : (
    <Navigate to="/login" />
  );
};

export default AuthOnlyRoutes;
