import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTopButton from "./components/ScrollToTopButton";

import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";

import { Salebar } from "./components/salebar/Salebar";
import { Features } from "./components/feature/Features";
import { Collection } from "./components/collection/Collection";
import { Collaboration } from "./components/collaboration/Collaboration";
import { Newsletter } from "./components/newsletter/Newsletter";
import { Community } from "./components/community/Community";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="h-screen bg-indigo-950 ">
          <Main />
          <Salebar />
          <Features />
          <Collection />
          <Community />
          <Salebar />
          <Collaboration />
          <Newsletter />
          <Footer />
          <ScrollToTopButton />
        </div>
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
