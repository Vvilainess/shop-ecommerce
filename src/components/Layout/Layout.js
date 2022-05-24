import React from "react";
import Header from "./components/Header/index.js";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div>{children}</div>
        </>
    );
};

export default Layout;
