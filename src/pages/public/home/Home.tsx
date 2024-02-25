import "./home.scss";
import { lazy } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Insight from "@src/widgets/home/insight/Insight";
import Navlink from "@components/navlink/Navlink";
import Breadcrumbs from "@src/components/breadcrumb/Breadcrumbs";
import Singup from "@src/widgets/home/signup/Singup";

const Index = lazy(() => import("./Index.tsx"));
const Tools = lazy(() => import("./Tools.tsx"));

function Home() {
  const TabsLinks = [
    { label: "Tools", path: "/home/tools" },
    { label: "AWS Builders", path: "/home/aws-builder" },
    { label: "Start Build", path: "/home/start-build" },
    { label: "Build Supplies", path: "/home/build-supplies" },
    { label: "Tooling", path: "/home/tooling" },
    { label: "Blue Hosting", path: "/home/blue-host" },
  ];

  return (
    <main id="home">
      <h1 className="head">Best Website Builder in US</h1>
      <Insight />
      <nav className="tabs">
        {TabsLinks.map((link) => (
          <Navlink key={link.label} {...link} />
        ))}
      </nav>
      <Breadcrumbs />
      <Routes>
        <Route index element={<Index />} />
        <Route path="tools" element={<Tools />} />
      </Routes>
      <Outlet />
      <Singup />
    </main>
  );
}

export default Home;
