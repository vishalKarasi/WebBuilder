import { lazy, useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const PublicRoute = lazy(() => import("./routes/PublicRoute.tsx"));
const Home = lazy(() => import("./public/home/Home.tsx"));
const Categories = lazy(() => import("./public/categories/Categories.tsx"));
const PageNotFound = lazy(() => import("./PageNotFound.tsx"));

function App() {
  const { mode } = useSelector((state: any) => state.ui);

  useEffect(() => {
    document.body.className = mode;
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/home/*" element={<Home />} />
          <Route path="/Categories/*" element={<Categories />} />
          {/* Other Routes */}
        </Route>

        {/* <Route path="/admin" element={<PrivateRoute />}>
          Private Route goes here
        </Route> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
