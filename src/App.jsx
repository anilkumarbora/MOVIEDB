import React from "react";
import Layout from "./components/Layout";
import WhatsHot from "./components/WhatsHot";
import NewReleases from "./components/NewReleases";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NewReleases />} />
          <Route path="popularmovies" element={<WhatsHot />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
