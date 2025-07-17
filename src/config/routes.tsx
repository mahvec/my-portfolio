import AppLayout from "@/components/layout/app-layout";
import About from "@/pages/about";
import Home from "@/pages/home";
import Projects from "@/pages/projects";
import Contact from "@/pages/contact";
import { createBrowserRouter, Navigate } from "react-router";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/home"} />,
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default routes;
