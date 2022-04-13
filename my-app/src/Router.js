import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../src/containers/landingPage";
import Home from "../src/containers/home";
import Settings from "../src/containers/settings";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import SignIn from "./components/login";
import SignUp from "./components/registration";
import Singles from "./containers/single";
import Write from "./containers/write";
import { Posts } from "./containers/posts";
import { Context } from "./context/context";

const Router = () => {
  const {user}=useContext(Context)
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/settings" element={<Settings />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/posts/:id" element={<Singles/>} />
        <Route path="/write" element={<Write />} />
        <Route path="/home/posts" element={<Posts/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Router;
