import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

import Layout from "./components/Layout";
const NotFound = lazy(() => import("./pages/NotFound"));
const HomePage = lazy(() => import("./pages/HomePage"));
const BookDetails = lazy(() => import("./pages/BookDetails"));

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} errorElement={<NotFound />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/:id" element={<BookDetails />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default AppRoutes;
