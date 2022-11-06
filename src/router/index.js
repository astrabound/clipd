import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import About from "../views/about";
import ClipsIndex from "../views/clips";
import Dashboard from "../views/dashboard";
import RootLayout from "../views/layout";
import Settings from "../views/settings";

const browserRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="clips" element={<ClipsIndex />} />
      <Route path="about" element={<About />} />
      <Route path="settings" element={<Settings />} />
    </Route>
  )
);

const Router = () => <RouterProvider router={browserRouter} />;

export default Router;
