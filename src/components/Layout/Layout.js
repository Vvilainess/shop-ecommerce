import React from "react";
import Header from "../header/Header";
import { BrowserRouter } from "react-router-dom";

const Layout = () => {
    return (
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );
};

export default Layout;
