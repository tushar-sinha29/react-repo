import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Footer from "./Footer";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/all" element={<Home q="All"/>} />
          <Route path="/politics" element={<Home q="Politics"/>} />
          <Route path="/crime" element={<Home q="Crime"/>} />
          <Route path="/education" element={<Home q="Education"/>} />
          <Route path="/technology" element={<Home q="Technology"/>} />
          <Route path="/science" element={<Home q="Science"/>} />
          <Route path="/sports" element={<Home q="Sports"/>} />
          <Route path="/ipl" element={<Home q="IPL"/>} />
          <Route path="/entertainment" element={<Home q="Entertainment"/>} />
          <Route path="/jokes" element={<Home q="Jokes"/>} />   
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}
