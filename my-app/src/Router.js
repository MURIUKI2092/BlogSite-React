import React, { useContex, useState, useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import {userContext} from './context/userContext'


const Router = () => {
  const [user, setUser]= useState(null);
  const value = useMemo(() => ({user, setUser}),[user, setUser]);

    return (
      <BrowserRouter>
      <Navbar/>
      <userContext.Provider value={value}>
        <Routes>
        
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/settings" element={<Settings />} />
          
          <Route path="/posts/:id" element={<Singles/>} />
          <Route path="/write" element={<Write />} />
          <Route path="/home/posts" element={<Posts/>} />
          
        </Routes>
        </userContext.Provider>
        <Footer/>
      </BrowserRouter>
    );
};

export default Router;
