import React from "react";
import { Routes, Route } from "react-router";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Categoies from "../pages/Categories";
import Contact from "../pages/Contact";
import Pages from "../pages/Pages";

const Switch = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />}>
                <Route path="/blog" element={<Blog />} />
                <Route path="/category" element={<Categoies />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pages" element={<Pages />} />
            </Route>
        </Routes>
    );
};

export default Switch;
