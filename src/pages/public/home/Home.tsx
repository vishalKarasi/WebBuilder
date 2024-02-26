import "./home.scss";
import { lazy } from "react";
import { Outlet, Route, Routes } from "react-router-dom";

import Insight from "@widgets/home/insight/Insight.tsx";
import Navlink from "@components/navlink/Navlink.tsx";
import Breadcrumbs from "@components/breadcrumb/Breadcrumbs.tsx";
import Singup from "@widgets/home/signup/Singup.tsx";

const Index = lazy(() => import("./Index.tsx"));
const Tools = lazy(() => import("./Tools.tsx"));
const AwsBuilder = lazy(() => import("./AwsBuilder.tsx"));

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
        <Route path="aws-builder" element={<AwsBuilder />} />
      </Routes>
      <Outlet />
      <Singup />
    </main>
  );
}

export default Home;
