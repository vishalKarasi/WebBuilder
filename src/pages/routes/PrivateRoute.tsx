// import { lazy } from "react";
// import { useSelector } from "react-redux";
// import { Navigate, Outlet } from "react-router-dom";
// const Header = lazy(() => import("@pages/public/header/Header.jsx"));

// const PrivateRoute = () => {
//   const { accessToken, status } = useSelector((state) => state.auth);
//   const notAuth = !accessToken && status === "error";
//   return notAuth ? (
//     <Navigate to="/auth" />
//   ) : (
//     <>
//       <Header type="Admin" />
//       <Outlet />
//     </>
//   );
// };

// export default PrivateRoute;
