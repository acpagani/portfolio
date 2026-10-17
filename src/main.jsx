import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import LanguageProvider from "./i18n/LanguageProvider";
import Home from "./pages/Home";

// Home ships in the main chunk; the rest load on navigation. Keeps the
// GitHub calendar and EmailJS out of the first paint entirely.
const routes = {
  about: () => import("./pages/About"),
  projects: () => import("./pages/Projects"),
  projectDetails: () => import("./pages/ProjectDetails"),
  contact: () => import("./pages/Contact"),
  notFound: () => import("./pages/NotFound"),
};
const About = lazy(routes.about);
const Projects = lazy(routes.projects);
const ProjectDetails = lazy(routes.projectDetails);
const Contact = lazy(routes.contact);
const NotFound = lazy(routes.notFound);

// Warm the route chunks once the home is idle, so the first click on a nav
// link doesn't wait on the network. The browser caches the modules; React.lazy
// then resolves them in a microtask instead of a round-trip.
const warmRoutes = () => Object.values(routes).forEach((load) => load().catch(() => {}));
if ("requestIdleCallback" in window) requestIdleCallback(warmRoutes, { timeout: 4000 });
else setTimeout(warmRoutes, 2500);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "projects/:id", element: <ProjectDetails /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </StrictMode>
);
