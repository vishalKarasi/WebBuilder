import { lazy } from "react";
import { Outlet } from "react-router-dom";
const Header = lazy(() => import("@pages/public/header/Header.tsx"));
const Footer = lazy(() => import("@pages/public/footer/Footer.tsx"));

const PublicRoute = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicRoute;
