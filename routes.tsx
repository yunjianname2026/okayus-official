import { createBrowserRouter } from "react-router";
import Landing from "./pages/Landing";
import BrandHome from "./pages/BrandHome";
import PlansPage from "./pages/PlansPage";
import Checkout from "./pages/Checkout";
import ArchivePage from "./pages/ArchivePage";
import MetricsPage from "./pages/MetricsPage";
import SciencePage from "./pages/SciencePage";
import AboutPage from "./pages/AboutPage";
import LogoExportPage from "./pages/LogoExportPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: BrandHome,
  },
  {
    path: "/landing",
    Component: Landing,
  },
  {
    path: "/plans",
    Component: PlansPage,
  },
  {
    path: "/checkout",
    Component: Checkout,
  },
  {
    path: "/archive",
    Component: ArchivePage,
  },
  {
    path: "/metrics",
    Component: MetricsPage,
  },
  {
    path: "/science",
    Component: SciencePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/logo-export",
    Component: LogoExportPage,
  },
]);
