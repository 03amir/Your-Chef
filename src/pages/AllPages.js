import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import SearchedPage from "./SearchedPage";
import Details from "./Details";
import { AnimatePresence } from "framer-motion";

function AllPages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.path}>
        <Route path="/" element={<Home />} />

        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/search/:searched" element={<SearchedPage />} />
        <Route path="/recipe/:id" element={<Details />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AllPages;
